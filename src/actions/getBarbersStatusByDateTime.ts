"use server";

import { BarberStatus } from "@/types/barberStatus";
import { allBarbers } from "../domain/allBarbers";
import { getBusyBarbers } from "../domain/getbBusyBarbers";

export async function getBarbersStatusByDateTime(dateTime: Date): Promise<BarberStatus[]> {
  const barbers = await allBarbers();   
  const busyBarbers = await getBusyBarbers(dateTime);

    return barbers.map(barber => ({
    barber,
    available: !busyBarbers.includes(barber.id)
  }));
}