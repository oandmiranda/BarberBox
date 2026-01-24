"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Calendar from "@/components/sections/calendar";
import TimeSlots from "@/components/sections/timeSlot";
import Button from "@/components/ui/button";

type Props = {
  serviceId: string;
};

export default function ScheduleDateClient({ serviceId }: Props) {
  console.log("RENDER ScheduleDateClient");
  const router = useRouter();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  function handleGoToSummary() {
    if (!selectedDate || !selectedTime) return;

    // formatação
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    router.push(
      `/schedule/summary?serviceId=${serviceId}&date=${formattedDate}&time=${selectedTime}`,
    );
  }

  return (
    <>
      <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />

      {selectedDate && (
        <TimeSlots selectedTime={selectedTime} onSelectTime={setSelectedTime} />
      )}

      {selectedDate && selectedTime && (
        <Button variant="primary" type="button" onClick={handleGoToSummary}>
          Agendar
        </Button>
      )}
    </>
  );
}
