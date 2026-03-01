export function canCancelAppointment(
  status: "SCHEDULED" | "CANCELED",
  startTime: Date,
  now: Date
): boolean {
  if (status !== "SCHEDULED") return false;

  const fourHoursInMs = 4 * 60 * 60 * 1000;
  const difference = startTime.getTime() - now.getTime();

  // Já passou do horário
  if (difference <= 0) return false;

  // Pode cancelar somente se faltar 4h ou mais
  return difference >= fourHoursInMs;
}
