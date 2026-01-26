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
    />
  );
}
