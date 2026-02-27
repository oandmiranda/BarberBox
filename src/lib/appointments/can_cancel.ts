export function canCancelAppointment(
  status: "SCHEDULE" | "CANCELED",
  startTime: Date,
  now: Date
): boolean {
  if (status !== "SCHEDULE") return false

  const fourHoursInMs = 4 * 60 * 60 * 1000
  const difference = startTime.getTime() - now.getTime()

  return difference >= fourHoursInMs
}