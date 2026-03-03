// roda apenas no node, fora do next
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

import { neon } from "@neondatabase/serverless";
import { TIME_SLOTS } from "@/domain/timeSlots";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined");
}

const sql = neon(databaseUrl);

const timeSlots = TIME_SLOTS;

function generateNextDays(totalDays: number) {
  const dates: Date[] = [];
  const today = new Date();

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    date.setHours(0, 0, 0, 0);
    dates.push(date);
  }

  return dates;
}

async function seed() {
  const OCCUPANCY_RATE = 0.7; // 70%
  const TOTAL_DAYS = 60; // próximos 60 dias

  const barbers = await sql`
    SELECT id FROM users WHERE role = 'BARBER'
  `;
  const clients = await sql`
    SELECT id FROM users WHERE role = 'CLIENT'
  `;
  const services = await sql`
    SELECT id, duration_minutes FROM services
  `;

  if (
    barbers.length === 0 ||
    clients.length === 0 ||
    services.length === 0
  ) {
    throw new Error(
      "Barbers, clients or services are empty. Check the database."
    );
  }

  const dates = generateNextDays(TOTAL_DAYS);

  let createdCount = 0;

  for (const barber of barbers) {
    for (const baseDate of dates) {
      for (const time of timeSlots) {

        if (Math.random() > OCCUPANCY_RATE) continue;

        const [hour, minute] = time.split(":").map(Number);

        const start = new Date(baseDate);
        start.setHours(hour, minute, 0, 0);

        const randomService =
          services[Math.floor(Math.random() * services.length)];

        const randomClient =
          clients[Math.floor(Math.random() * clients.length)];

        const end = new Date(start);
        end.setMinutes(
          start.getMinutes() + randomService.duration_minutes
        );

        await sql`
          INSERT INTO appointments (
            client_id,
            barber_id,
            service_id,
            start_time,
            end_time,
            status
          )
          VALUES (
            ${randomClient.id},
            ${barber.id},
            ${randomService.id},
            ${start},
            ${end},
            'SCHEDULED'
          )
        `;

        createdCount++;
      }
    }
  }

  console.log(`Seed finalizado. Total criado: ${createdCount}`);
}

seed().catch((err) => {
  console.error("Erro no seed:", err);
});