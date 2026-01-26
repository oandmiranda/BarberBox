export function buildDateTime(date: Date, time: string): Date {
  const [hour, minute] = time.split(":");

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    Number(hour),
    Number(minute),
    0,
    0
  );
}