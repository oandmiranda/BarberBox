"use server";

import { getBusyBarbers } from "@/domain/getbBusyBarbers";
import { allBarbers } from "../domain/allBarbers";
import { TIME_SLOTS } from "../domain/timeSlots";
import { parseDateTime } from "./parseDateTime";

const timeSlots = TIME_SLOTS;

function formatToBR(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

// retorna barbeiros disponíveis para cada horário de uma data específica
export async function getAvailableBarbersByDate(date: Date) {
  const barbers = await allBarbers();
  const barbersIds = barbers.map(barber => barber.id);

  const availability: Record<string, string[]> = {};

  const dateString = formatToBR(date);

  for (const time of timeSlots) {
    const startTime = parseDateTime(dateString, time);

    if (!startTime) {
      availability[time] = barbersIds;
      continue;
    }

    const busyBarbers = await getBusyBarbers(startTime);

    const availableBarbers = barbersIds.filter(
      barberId => !busyBarbers.includes(barberId)
    );

    availability[time] = availableBarbers;
  }

  return availability;
}