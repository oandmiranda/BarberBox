import { Barber } from "@/types/barber";
import Image from "next/image";

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
    <div className="flex flex-wrap items-center gap-2 font-details">
      {barbers.map((barber) => {
        const isSelected = selectedBarber === barber.id;

        return (
          <div key={barber.id}>
            <button
              type="button"
              onClick={() => onSelectBarber(barber.id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                border shadow-sm flex items-center gap-2

                ${
                  isSelected
                    ? "bg-brandPrimary text-white border-brandPrimary shadow-md scale-105"
                    : "bg-white text-gray-800 border-gray-300 hover:border-brandPrimary hover:text-brandPrimary"
                }

                cursor-pointer hover:shadow-md
              `}
            >
              <div className="relative w-[40px] h-[40px] rounded-full overflow-hidden">
                {barber.imageUrl && (
                  <Image src={barber.imageUrl} alt={barber.name} className="rounded-full object-cover" fill/>
                )}
              </div>
              {barber.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
