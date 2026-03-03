import { fromZonedTime } from "date-fns-tz";
import { sql } from "@/lib/db";

const TZ = "America/Sao_Paulo";

export async function getAllAppointmentsBetweenPeriod(
  startDate: Date,
  endDate: Date
) {
  const startUTC = fromZonedTime(startDate, TZ);
  const endUTC = fromZonedTime(endDate, TZ);

  const result = await sql`
    SELECT start_time, barber_id
    FROM appointments
    WHERE start_time >= ${startUTC}
      AND start_time <= ${endUTC}
      AND status = 'SCHEDULED'
  `;

  return result.map((row) => ({
    startTime: row.start_time,
    barberId: row.barber_id,
  }));
}