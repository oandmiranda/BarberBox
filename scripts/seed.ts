// // roda apenas no node, fora do next
// import dotenv from "dotenv";
// import path from "path";

// dotenv.config({
//   path: path.resolve(process.cwd(), ".env.local"),
// });

// import { neon } from "@neondatabase/serverless";
// import { TIME_SLOTS } from "@/domain/timeSlots";
// import { parseDateTime } from "@/actions/parseDateTime";

// const databaseUrl = process.env.DATABASE_URL;

// if (!databaseUrl) {
//   throw new Error("DATABASE_URL is not defined");
// }

// const sql = neon(databaseUrl);

// const timeSlots = TIME_SLOTS;

// function generateNextDays(totalDays: number) {
//   const dates: Date[] = [];
//   const today = new Date();

//   for (let i = 0; i < totalDays; i++) {
//     const date = new Date(today);
//     date.setDate(today.getDate() + i);
//     date.setHours(0, 0, 0, 0);
//     dates.push(date);
//   }

//   return dates;
// }

// function formatToBR(date: Date): string {
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();

//   return `${day}/${month}/${year}`;
// }

// async function seed() {
//   await sql`DELETE FROM appointments`;

//   const OCCUPANCY_RATE = 0.7;
//   const TOTAL_DAYS = 60;

//   const barbers = await sql`
//     SELECT id FROM users WHERE role = 'BARBER'
//   `;
//   const clients = await sql`
//     SELECT id FROM users WHERE role = 'CLIENT'
//   `;
//   const services = await sql`
//     SELECT id, duration_minutes FROM services
//   `;

//   if (
//     barbers.length === 0 ||
//     clients.length === 0 ||
//     services.length === 0
//   ) {
//     throw new Error(
//       "Barbers, clients or services are empty. Check the database."
//     );
//   }

//   const dates = generateNextDays(TOTAL_DAYS);

//   let createdCount = 0;

//   for (const barber of barbers) {
//     for (const baseDate of dates) {
//       const dateString = formatToBR(baseDate);

//       for (const time of timeSlots) {
//         if (Math.random() > OCCUPANCY_RATE) continue;

//         // usa a MESMA regra da server action
//         const start = parseDateTime(dateString, time);

//         if (!start) continue;

//         const randomService =
//           services[Math.floor(Math.random() * services.length)];

//         const randomClient =
//           clients[Math.floor(Math.random() * clients.length)];

//         const end = new Date(
//           start.getTime() +
//             randomService.duration_minutes * 60000
//         );

//         await sql`
//           INSERT INTO appointments (
//             client_id,
//             barber_id,
//             service_id,
//             start_time,
//             end_time,
//             status
//           )
//           VALUES (
//             ${randomClient.id},
//             ${barber.id},
//             ${randomService.id},
//             ${start},
//             ${end},
//             'SCHEDULED'
//           )
//         `;

//         createdCount++;
//       }
//     }
//   }

//   console.log(`Seed finalizado. Total criado: ${createdCount}`);
// }

// seed().catch((err) => {
//   console.error("Erro no seed:", err);
// });

// roda apenas no node, fora do next
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve(process.cwd(), ".env.local"),
});

import { neon } from "@neondatabase/serverless";
import { parseDateTime } from "@/actions/parseDateTime";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined");
}

const sql = neon(databaseUrl);

async function seed() {
  // limpa tudo antes
  await sql`DELETE FROM appointments`;

  // pega 1 barbeiro, 1 cliente, 1 serviço
  const barber = await sql`
    SELECT id FROM users WHERE role = 'BARBER' LIMIT 1
  `;

  const client = await sql`
    SELECT id FROM users WHERE role = 'CLIENT' LIMIT 1
  `;

  const service = await sql`
    SELECT id, duration_minutes FROM services LIMIT 1
  `;

  if (!barber.length || !client.length || !service.length) {
    throw new Error("Dados insuficientes para teste.");
  }

  const date = "14/03/2026";
  const time = "09:00";

  // usa exatamente a mesma regra do sistema
  const start = parseDateTime(date, time);

  if (!start) {
    throw new Error("Erro ao converter data.");
  }

  const end = new Date(
    start.getTime() + service[0].duration_minutes * 60000
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
      ${client[0].id},
      ${barber[0].id},
      ${service[0].id},
      ${start},
      ${end},
      'SCHEDULED'
    )
  `;

  console.log("Agendamento de teste criado.");
  console.log("Start salvo:", start.toISOString());
  console.log("End salvo:", end.toISOString());
}

seed().catch((err) => {
  console.error("Erro no seed:", err);
});