import { unstable_noStore as noStore } from "next/cache";
import { TIME_SLOTS } from "./timeSlots";
import { allBarbers } from "./allBarbers";
import { getAllAppointmentsBetweenPeriod } from "./auth/getAllApointmentsBetweenPeriod";

function formatDay(date: Date) {
  return date.toISOString().split("T")[0]; // YYYY-MM-DD
}

function formatTime(date: Date) {
  return date.toTimeString().slice(0, 5); // HH:mm
}

export async function getUnavailableDays(
  startDate: Date,
  endDate: Date
): Promise<Date[]> {
  noStore();

  const barbers = await allBarbers();
  const totalBarbers = barbers.length;

  // busca todos os agendamentos do período de uma vez
  const appointments = await getAllAppointmentsBetweenPeriod(startDate, endDate);

  // mapa: { "2026-01-24": { "09:00": 2, "10:00": 3 } }
  const slotsMap: Record<string, Record<string, number>> = {};

  for (const appt of appointments) {
    const date = new Date(appt.startTime);
    const dayKey = formatDay(date);
    const timeKey = formatTime(date);

    if (!slotsMap[dayKey]) {
      slotsMap[dayKey] = {};
    }

    if (!slotsMap[dayKey][timeKey]) {
      slotsMap[dayKey][timeKey] = 0;
    }

    slotsMap[dayKey][timeKey]++;
  }

  const unavailableDays: Date[] = [];

  const currentDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );

  while (currentDate <= endDate) {
    const dayKey = formatDay(currentDate);

    let allSlotsFull = true;

    for (const time of TIME_SLOTS) {
      const count = slotsMap[dayKey]?.[time] ?? 0;

      if (count < totalBarbers) {
        allSlotsFull = false;
        break;
      }
    }

    if (allSlotsFull) {
      unavailableDays.push(new Date(currentDate));
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return unavailableDays;
}