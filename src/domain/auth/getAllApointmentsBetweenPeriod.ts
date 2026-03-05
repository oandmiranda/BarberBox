import { sql } from "@/lib/db";

type AppointmentRow = {
  start_time: Date;
  barber_id: string;
};

export async function getAllAppointmentsBetweenPeriod(
  startDate: Date,
  endDate: Date
) {
  const result = await sql`
    SELECT start_time, barber_id
    FROM appointments
    WHERE start_time >= ${startDate.toISOString()}
      AND start_time <= ${endDate.toISOString()}
      AND status = 'SCHEDULED'
  `;

  const rows = result as AppointmentRow[];

  return rows.map((row) => ({
    startTime: row.start_time,
    barberId: row.barber_id,
  }));
}