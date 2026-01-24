"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface CalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date | null) => void;
}

export default function Calendar({
  selectedDate,
  onSelectDate,
}: CalendarProps) {
  return (
    <DayPicker
      animate
      mode="single"
      selected={selectedDate ?? undefined}
      onSelect={(date) => {
        onSelectDate(date ?? null);
      }}
      disabled={{ before: new Date() }}
    />
  );
}