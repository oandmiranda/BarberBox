import { fromZonedTime } from "date-fns-tz";

export function parseDateTime(date: string, time: string): Date | null {
  const [day, month, year] = date.split("/");
  const [hour, minute] = time.split(":");

  if (!day || !month || !year || !hour || !minute) {
    return null;
  }

  const formatted = `${year}-${month}-${day}T${hour}:${minute}:00`;

  const utcDate = fromZonedTime(
    formatted,
    "America/Sao_Paulo"
  );

  return isNaN(utcDate.getTime()) ? null : utcDate;
}