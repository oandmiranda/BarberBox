"use server";

import { unstable_noStore as noStore } from "next/cache";
import { TIME_SLOTS } from "../domain/timeSlots";
import { allBarbers } from "../domain/allBarbers";
import { getAllAppointmentsBetweenPeriod } from "../domain/auth/getAllApointmentsBetweenPeriod";
import { toZonedTime } from "date-fns-tz";

const TZ = "America/Sao_Paulo";

function formatDay(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatTime(date: Date) {
  const h = String(date.getHours()).padStart(2, "0");
  return `${h}:00`;
}

export async function getUnavailableDays(
  startDate: Date,
  endDate: Date
): Promise<string[]> {
  noStore();

  const barbers = await allBarbers();
  const totalBarbers = barbers.length;

  const appointments = await getAllAppointmentsBetweenPeriod(
    startDate,
    endDate
  );

  const slotsMap: Record<string, Record<string, number>> = {};

  for (const appt of appointments) {
    const zoned = toZonedTime(appt.startTime, TZ);

    const dayKey = formatDay(zoned);
    const timeKey = formatTime(zoned);

    if (!slotsMap[dayKey]) {
      slotsMap[dayKey] = {};
    }

    if (!slotsMap[dayKey][timeKey]) {
      slotsMap[dayKey][timeKey] = 0;
    }

    slotsMap[dayKey][timeKey]++;
  }

  const unavailableDays: string[] = [];

  const start = toZonedTime(startDate, TZ);
  start.setHours(0, 0, 0, 0);

  const end = toZonedTime(endDate, TZ);
  end.setHours(23, 59, 59, 999);

  const currentDate = new Date(start);

  while (currentDate <= end) {
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
      unavailableDays.push(dayKey);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return unavailableDays;
}