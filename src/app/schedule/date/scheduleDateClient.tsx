// Necessário porque a seleção de data faz parte do fluxo de agendamento, e o next não permite ter controle de estado em um server pages (porque server pages não rodam no browser). O estado precisa ficar em um Client Component acima do Calendar para que o fluxo (data - horário - confirmação) seja controlado corretamente.
"use client";

import { useState } from "react";
import Calendar from "@/components/sections/calendar";
import TimeSlots from "@/components/sections/timeSlot";
import { useRouter } from "next/navigation";

export default function ScheduleDateClient({serviceId}: {serviceId: string}) {
  const router = useRouter();

  function handleGoToSummary() {
    router.push(
      `/schedule/summary?serviceId=${serviceId}&date=${selectedDate?.toISOString()}&time=${selectedTime}`
    );
  }
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  console.log(`here bby: ${serviceId}, ${selectedDate}, ${selectedTime}`)

  return (
    <>
      <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />

      {selectedDate && (
        <TimeSlots selectedTime={selectedTime} onSelectTime={setSelectedTime} />
      )}

      {selectedDate && selectedTime && (
        <button onClick={handleGoToSummary} className="bg-orange-600 p-2">Agendar</button>
      )}
    </>
  );
}
