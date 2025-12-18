"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface CalendarProps {
  selectedDate?: Date;
  onSelectDate: (date?: Date) => void;
}

export default function Calendar({
  selectedDate,
  onSelectDate,
}: CalendarProps) {
  return (
    <DayPicker
      animate
      mode="single"
      selected={selectedDate}
      onSelect={onSelectDate}
      disabled={{ before: new Date() }}
    />
  );
}
