export type BaseStatus = "SCHEDULE" | "CANCELED"
export type ResolvedStatus = "SCHEDULE" | "CANCELED" | "COMPLETED"

type Appointment = {
  status: BaseStatus
  end_time: Date
}

export function switchAppointmentStatus(
  appointment: Appointment,
  now: Date
): ResolvedStatus {
  if (appointment.status === "CANCELED") {
    return "CANCELED"
  }

  if (appointment.end_time < now) {
    return "COMPLETED"
  }

  return "SCHEDULE"
}