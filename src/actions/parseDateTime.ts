import { fromZonedTime } from "date-fns-tz";

const BARBERSHOP_TIMEZONE = "America/Sao_Paulo";

export function parseDateTime(date: string, time: string): Date | null {
  const [day, month, year] = date.split("/");
  const [hour, minute] = time.split(":");

  if (!day || !month || !year || !hour || !minute) {
    return null;
  }

  const formatted = `${year}-${month}-${day}T${hour}:${minute}:00`;

  const utcDate = fromZonedTime(
    formatted,
    BARBERSHOP_TIMEZONE
  );

  return isNaN(utcDate.getTime()) ? null : utcDate;
}