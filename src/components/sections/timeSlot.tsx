"use client";

import { TIME_SLOTS } from "@/domain/timeSlots";

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
  loading
}: TimeSlotsProps) {
  if (loading) {
    return <p>Carregando horários...</p>;
  }

  if (!availability) {
    return null;
  }
  return (
    <div>
      <h3>Escolha um horário</h3>

      <div style={{ display: "flex", gap: 8 }}>
        {timeSlots.map((time) => {
          const availableBarbers = availability[time];
          const isDisabled = !availableBarbers || availableBarbers.length === 0;

          return (
            <button
              key={time}
              onClick={() => onSelectTime(time)}
              disabled={isDisabled}
              style={{
                padding: 8,
                cursor: isDisabled ? "not-allowed" : "pointer",
                opacity: isDisabled ? 0.4 : 1,
                border:
                  selectedTime === time
                    ? "2px solid black"
                    : "1px solid gray",
              }}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}
