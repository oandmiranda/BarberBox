"use server";

import { allBarbers } from "../domain/allBarbers";
import { getBusyBarbers } from "../domain/getbBusyBarbers";
import { Barber } from "@/types/barber";

export async function getAvailableBarbersByDateTime(dateTime: Date): Promise<Barber[]> {
  const barbers = await allBarbers();        // Barber[]
  const busyBarbers = await getBusyBarbers(dateTime); // string[] (ids ocupados)

  const availableBarbers = barbers.filter(
    barber => !busyBarbers.includes(barber.id)
  );

  return availableBarbers;
}