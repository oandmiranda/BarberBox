import { sql } from "@/lib/db";

type AppointmentProps = {
  startTime: Date;
  barberId: string;
};

export async function getAllAppointmentsBetweenPeriod(startDate: Date, endDate: Date): Promise<AppointmentProps[]> {
  const result = await sql`
    SELECT start_time, barber_id
    FROM appointments
    WHERE start_time >= ${startDate}
      AND start_time <= ${endDate}
      AND status = 'SCHEDULED'
  `;

  return result.map((row) => ({
    startTime: row.start_time,
    barberId: row.barber_id,
  }));
}
