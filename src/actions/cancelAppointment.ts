"use server";

import { canCancelAppointment } from "@/lib/appointments/can_cancel";
import { sql } from "@/lib/db";

export async function cancelAppointment(
  appointmentId: string,
  clientId: string,
) {
  if (!appointmentId) {
    throw new Error("Appointment ID is required");
  }

  if (!clientId) {
    throw new Error("Client not authenticated");
  }

  // Buscar agendamento
  const rows = await sql`
    SELECT id, start_time, status, client_id
    FROM appointments
    WHERE id = ${appointmentId}
    LIMIT 1
  `;

  if (rows.length === 0) {
    throw new Error("Appointment not found");
  }

  const appointment = rows[0];

  // Verificar dono
  if (appointment.client_id !== clientId) {
    throw new Error("Unauthorized");
  }

  const startTime = new Date(appointment.start_time);
  const now = new Date();

  const allowed = canCancelAppointment(appointment.status, startTime, now);

  if (!allowed) {
    throw new Error("Cancellation window expired or invalid status");
  }

  // Atualizar banco
  await sql`
    UPDATE appointments
    SET status = 'CANCELED'
    WHERE id = ${appointmentId}
  `;

  return { success: true };
}
