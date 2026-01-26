import { sql } from "@/lib/db";

export async function getBusyBarbers(startTime: Date): Promise<string[]> {
  const endTime = new Date(startTime);
  endTime.setMinutes(endTime.getMinutes() + 59);

  const result = await sql`
    SELECT barber_id
    FROM appointments
    WHERE start_time >= ${startTime}
      AND start_time < ${endTime}
      AND status = 'SCHEDULED'
  `;

  return result.map(row => row.barber_id);
}