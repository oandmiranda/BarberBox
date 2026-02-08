"use client";

import { TIME_SLOTS } from "@/domain/timeSlots";
import Spinner from "../ui/spinner";

type TimeSlotsProps = {
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
  availability: Record<string, string[]> | null;
  loading: boolean;
};

const timeSlots = TIME_SLOTS;

export default function TimeSlots({
  selectedTime,
  onSelectTime,
  availability,
  loading,
}: TimeSlotsProps) {
  if (loading) {
    return <Spinner />;
  }

  if (!availability) {
    return null;
  }

  return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 font-details">
        {timeSlots.map((time) => {
          const availableBarbers = availability[time];
          const isDisabled = !availableBarbers || availableBarbers.length === 0;
          const isSelected = selectedTime === time;

          return (
            <div key={time} className="relative group">
              <button
                onClick={() => onSelectTime(time)}
                disabled={isDisabled}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  border shadow-sm

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
                  Nenhum barbeiro disponível
                </span>
              )}
            </div>
          );
        })}
      </div>
  );
}