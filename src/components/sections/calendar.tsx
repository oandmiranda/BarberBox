"use client";

import { DayPicker } from "react-day-picker";
import { ptBR } from "react-day-picker/locale";
import "react-day-picker/style.css";

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date | null) => void;
  unavailableDays: Date[];
}

export default function Calendar({
  selectedDate,
  onSelectDate,
  unavailableDays,
}: CalendarProps) {
  return (
    <DayPicker
      className="font-details border-b-2 pb-2"
      animate
      mode="single"
      locale={ptBR}
      selected={selectedDate ?? undefined}
      onSelect={(date) => {
        onSelectDate(date ?? null);
      }}
      disabled={[
        { before: new Date() },
        { dayOfWeek: [0] },
        ...unavailableDays,
      ]}
      classNames={{
        selected: `bg-brandPrimary rounded-full text-white flex items-center justify-center`,
        day: `w-[60px] h-[60px]`,
        day_button:
          "w-full h-full flex items-center justify-center p-0 rounded-full",
        disabled:
          "text-gray-400 opacity-50",
      }}
    />
  );
}
