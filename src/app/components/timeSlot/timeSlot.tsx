"use client";

type TimeSlotsProps = {
  selectedTime?: string;
  onSelectTime: (time: string) => void;
};

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

export default function TimeSlots({
  selectedTime,
  onSelectTime,
}: TimeSlotsProps) {
  return (
    <div>
      <h3>Escolha um horário</h3>

      <div style={{ display: "flex", gap: 8 }}>
        {TIME_SLOTS.map((time) => (
          <button
            key={time}
            onClick={() => onSelectTime(time)}
            style={{
              padding: 8,
              border:
                selectedTime === time ? "2px solid black" : "1px solid gray",
            }}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}