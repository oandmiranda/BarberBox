"use server";

import { unstable_noStore as noStore } from "next/cache";
import { TIME_SLOTS } from "../domain/timeSlots";
import { allBarbers } from "../domain/allBarbers";
import { getAllAppointmentsBetweenPeriod } from "../domain/auth/getAllApointmentsBetweenPeriod";
import { toZonedTime } from "date-fns-tz";

function formatDay(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatTime(date: Date) {
  const h = String(date.getHours()).padStart(2, "0");
  const m = String(date.getMinutes()).padStart(2, "0");
  return `${h}:${m}`;
}

export async function getUnavailableDays(
  startDate: Date,
  endDate: Date
): Promise<Date[]> {
  noStore();

  const barbers = await allBarbers();
  const totalBarbers = barbers.length;

  const appointments = await getAllAppointmentsBetweenPeriod(
    startDate,
    endDate
  );

  const slotsMap: Record<string, Record<string, number>> = {};

  for (const appt of appointments) {
    const zonedDate = toZonedTime(
      appt.startTime,
      "America/Sao_Paulo"
    );

    const dayKey = formatDay(zonedDate);
    const timeKey = formatTime(zonedDate);

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