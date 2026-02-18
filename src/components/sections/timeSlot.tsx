"use client";

import { TIME_SLOTS } from "@/domain/timeSlots";
import Spinner from "../ui/spinner";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useWidthWindow } from "@/hook/useWidthWindow";

type TimeSlotsProps = {
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  availability: Record<string, string[]> | null;
  loading: boolean;
};

const timeSlots = TIME_SLOTS;

function isToday(date: Date | null) {
  if (!date) return false;

  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

function isPastTime(time: string) {
  const now = new Date();
  const [h, m] = time.split(":").map(Number);

  const slot = new Date();
  slot.setHours(h, m, 0, 0);

  return slot <= now;
}

export default function TimeSlots({
  selectedDate,
  selectedTime,
  onSelectTime,
  availability,
  loading,
}: TimeSlotsProps) {
  const visibleCount = useWidthWindow();
  const [startIndex, setStartIndex] = useState(0);

  const visibleSlots = timeSlots.slice(startIndex, startIndex + visibleCount);

  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + visibleCount < timeSlots.length;

  const nextSlots = () => {
    setStartIndex((i) =>
      i + visibleCount >= timeSlots.length ? i : i + visibleCount
    );
  };

  const prevSlots = () => {
    setStartIndex((i) =>
      i - visibleCount < 0 ? i : i - visibleCount
    );
  };

  if (loading) return <Spinner />;
  if (!availability) return null;

  return (
    <div className="flex items-center pt-2">

      <button
        onClick={prevSlots}
        disabled={!canGoBack}
        className={`px-2 text-xl transition
          ${canGoBack ? "opacity-100" : "opacity-30 cursor-not-allowed"}
        `}
      >
        <ArrowLeft className="bg-secondary p-2 rounded-full w-6 h-6" />
      </button>

      <div className="flex gap-3 px-2 overflow-hidden">
        {visibleSlots.map((time) => {
          const availableBarbers = availability[time];
          const noBarberAvailable =
            !availableBarbers || availableBarbers.length === 0;

          const pastTime = isToday(selectedDate) && isPastTime(time);
          const isDisabled = noBarberAvailable || pastTime;
          const isSelected = selectedTime === time;

          return (
            <div key={time} className="relative group">
              <button
                onClick={() => onSelectTime(time)}
                disabled={isDisabled}
                className={`
                  rounded-lg text-sm font-medium transition-all duration-200
                  border shadow-sm min-w-[72px] p-1 md:px-4 md:py-2 

                  ${
                    isSelected
                      ? "bg-brandPrimary text-white border-brandPrimary shadow-md scale-105"
                      : "bg-white text-gray-800 border-gray-300 hover:border-brandPrimary hover:text-brandPrimary"
                  }

                  ${
                    isDisabled
                      ? "opacity-40 cursor-not-allowed"
                      : "cursor-pointer hover:shadow-md"
                  }
                `}
              >
                {time}
              </button>

              {isDisabled && (
                <span
                  className="
                    absolute -top-6 left-1/2 -translate-x-1/2
                    whitespace-nowrap text-xs
                    bg-gray-900 text-white px-2 py-1 rounded-md
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  "
                >
                  Horário indisponível
                </span>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={nextSlots}
        disabled={!canGoForward}
        className={`px-2 text-xl transition
          ${canGoForward ? "opacity-100" : "opacity-30 cursor-not-allowed"}
        `}
      >
        <ArrowRight className="bg-secondary p-2 rounded-full w-6 h-6" />
      </button>

    </div>
  );
}