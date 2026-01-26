import { allBarbers } from "./allBarbers";
import { getBusyBarbers } from "./getbBusyBarbers";

//boolean function
export async function isTimeSlotFull(startTime: Date): Promise<boolean> {
  const busyBarbers = await getBusyBarbers(startTime);
  const barbers = await allBarbers();

  // se o número de barbeiros ocupados for igual ou maior que o número total de barbeiros, o horário está cheio
  return busyBarbers.length >= barbers.length;
}