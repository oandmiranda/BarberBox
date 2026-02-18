"use server";

import { sql } from "@/lib/db";

export async function getLastAppointmentByUserId(userId: string) {
  const result = await sql`
    SELECT
      a.id,
      a.start_time,
      a.end_time,
      a.status,
      a.created_at,

      s.id AS service_id,
      s.name AS service_name,
      s.duration_minutes,
      s.price,

      u.id AS barber_id,
      u.name AS barber_name,
      u.image_url AS barber_image_url

    FROM appointments a
    JOIN services s ON s.id = a.service_id
    JOIN users u ON u.id = a.barber_id

    WHERE a.client_id = ${userId}
    ORDER BY a.created_at DESC
    LIMIT 1
  `;

  return result[0] ?? null;
}