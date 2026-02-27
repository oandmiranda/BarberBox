"use server";

import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { switchAppointmentStatus } from "@/lib/appointments/switch_status";
import { sql } from "@/lib/db";
import {
  Appointment,
  AppointmentView,
  RawAppointmentRow,
} from "@/types/appointments";

export async function getUserAppointments(): Promise<AppointmentView[]> {
  const user = await getCurrentUser();
  if (!user || !user.id) {
    throw new Error("User ID is required");
  }

const rows = await sql`
  SELECT 
    a.id,
    a.start_time,
    a.end_time,
    a.status,
    u.image_url AS barber_image_url,
    u.name AS barber_name,
    s.name AS service_name
  FROM appointments a
  JOIN users u 
    ON u.id = a.barber_id
  JOIN services s 
    ON s.id = a.service_id
  WHERE a.client_id = ${user.id}
  ORDER BY a.start_time DESC
`

  const now = new Date();

  const appointments: Appointment[] = (rows as RawAppointmentRow[]).map(
    (row) => ({
      id: row.id,
      start_time: new Date(row.start_time),
      end_time: new Date(row.end_time),
      status: row.status,
      barber_image_url: row.barber_image_url,
      barber_name: row.barber_name,
      service_name: row.service_name,
    }),
  );

  return appointments.map(
    (appointment): AppointmentView => ({
      ...appointment,
      status: switchAppointmentStatus(appointment, now),
    }),
  );
}
