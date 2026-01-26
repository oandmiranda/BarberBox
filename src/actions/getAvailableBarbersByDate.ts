"use server";

import { getBusyBarbers } from "@/domain/getbBusyBarbers";
import { allBarbers } from "../domain/allBarbers";
import { TIME_SLOTS } from "../domain/timeSlots";
import { buildDateTime } from "@/domain/buildDateTime";

const timeSlots = TIME_SLOTS


// retorna barbeiros disponíveis para cada horário de uma data específica
export async function getAvailableBarbersByDate(date: Date) {
  const barbers = await allBarbers();
  const barbersIds = barbers.map(barber => barber.id);

  const availability: Record<string, string[]> = {};

  for (const time of timeSlots) {
    const startTime = buildDateTime(date, time);

    const busyBarbers = await getBusyBarbers(startTime);

    // remove os barbeiros ocupados
    const availableBarbers = barbersIds.filter(
      barberId => !busyBarbers.includes(barberId)
    );

    availability[time] = availableBarbers;
  }

  return availability;
}