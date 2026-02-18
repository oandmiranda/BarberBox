"use client";

import { useState } from "react";
import { addDays, startOfWeek, isSameDay, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Heading from "../ui/heading";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useWidthWindow } from "@/hook/useWidthWindow";

type Props = {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  unavailableDays: Date[];
};

export default function Calendar({
  selectedDate,
  onSelectDate,
  unavailableDays,
}: Props) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const MIN_WEEK_START = startOfWeek(today, { weekStartsOn: 1 });
  const [weekStart, setWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 }),
  );

  const visibleDays = useWidthWindow();
  const days = Array.from({ length: visibleDays }).map((_, i) =>
    addDays(weekStart, i),
  );

  const canGoBack = weekStart > MIN_WEEK_START;

  const visibleMonths = Array.from(
    new Set(days.map((d) => format(d, "MMMM", { locale: ptBR }))),
  );

  const monthLabel = visibleMonths
    .map((m) => m.charAt(0).toUpperCase() + m.slice(1))
    .join(" — ");

  const nextWeek = () => setWeekStart((d) => addDays(d, visibleDays));
  const prevWeek = () => {
    setWeekStart((current) => {
      const previous = addDays(current, -visibleDays);
      return previous < MIN_WEEK_START ? current : previous;
    });
  };

  // Cria um normalizador de data
  const toDateKey = (date: Date) =>
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const unavailableSet = new Set(unavailableDays.map(toDateKey));

  const isSunday = (day: Date) => {
    const d = day.getDay();
    return d === 0;
  };

  const isPastDay = (day: Date) => day < today;

  const isDisabled = (day: Date) =>
    unavailableSet.has(toDateKey(day)) || isSunday(day) || isPastDay(day);

  return (
    <div className="flex flex-col items-center gap-2 border-b-2 pb-4">
      <Heading size="lg" fontFamily="font-body">
        {monthLabel}
      </Heading>
      <div className="flex items-center">
        <button
          onClick={prevWeek}
          disabled={!canGoBack}
          className={`px-2 text-xl transition
          ${canGoBack ? "opacity-100" : "opacity-30 cursor-not-allowed"}
  `}
        >
          <ArrowLeft className="bg-secondary p-2 rounded-full w-6 h-6" />
        </button>

        <div className="flex gap-2 w-full">
          {days.map((day) => {
            const selected = selectedDate && isSameDay(day, selectedDate);
            const disabled = isDisabled(day);

            return (
              <button
                key={day.toISOString()}
                disabled={disabled}
                onClick={() => !disabled && onSelectDate(day)}
                className={`
              min-w-[72px] rounded-xl text-center transition p-1 sm:px-3 sm:py-2
              ${selected ? "bg-brandPrimary text-white" : "bg-neutral-100"}
              ${disabled ? "opacity-40 bg-gray-300 cursor-not-allowed text-gray-500" : ""}
            `}
              >
                <div className="text-xs capitalize">
                  {format(day, "EEE", { locale: ptBR })}
                </div>

                <div className="text-lg font-semibold">{format(day, "d")}</div>
              </button>
            );
          })}
        </div>

        <button onClick={nextWeek} className="px-2 text-xl">
          <ArrowRight className="bg-secondary p-2 rounded-full w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
