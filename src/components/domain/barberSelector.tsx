import { Barber } from "@/types/barber";

type BarberSelectorProps = {
  barbers: Barber[];
  selectedBarber: string | null;
  onSelectBarber: (barberId: string) => void;
};

export default function BarberSelector({
  barbers,
  selectedBarber,
  onSelectBarber,
}: BarberSelectorProps) {
  return (
    <div>
      <h3>Escolha um barbeiro</h3>

      <div style={{ display: "flex", gap: 8 }}>
        {barbers.map((barber) => (
          <button
            key={barber.id}
            type="button"
            onClick={() => onSelectBarber(barber.id)}
            style={{
              padding: 8,
              border:
                selectedBarber === barber.id
                  ? "2px solid black"
                  : "1px solid gray",
              cursor: "pointer",
            }}
          >
            {barber.name}
          </button>
        ))}
      </div>
    </div>
  );
}