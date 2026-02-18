import { BarberStatus } from "@/types/barberStatus";
import Image from "next/image";
import Text from "../ui/text";

type BarberSelectorProps = {
  barbers: BarberStatus[];
  selectedBarber: string | null;
  onSelectBarber: (barberId: string) => void;
};

export default function BarberSelector({
  barbers,
  selectedBarber,
  onSelectBarber,
}: BarberSelectorProps) {
  return (
    <div className="grid grid-cols-2 items-center gap-3 sm:grid-cols-2 lg:grid-cols-4 ">
      {barbers.map(({ barber, available }) => {
        const isSelected = selectedBarber === barber.id;

        return (
          <div key={barber.id}>
            <button
              type="button"
              disabled={!available}
              onClick={() => available && onSelectBarber(barber.id)}
              className={`
                w-full min-w-[72px] rounded-lg text-xs font-medium transition-all duration-200
                border shadow-sm flex items-center justify-center text-center gap-2 p-1 hover:shadow-md md:text-sm

                ${
                  isSelected
                    ? "bg-brandPrimary text-white border-brandPrimary shadow-md scale-105"
                    : "bg-transparent text-gray-800 border-gray-300 hover:border-brandPrimary"
                }
                ${
                  available ? "cursor-pointer" : "opacity-30 cursor-not-allowed"
                }
              `}
            >
              <div className="relative flex rounded-full overflow-hidden w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" >
                {barber.imageUrl && (
                  <Image
                    src={barber.imageUrl}
                    alt={barber.name}
                    className="rounded-full object-cover"
                    fill
                  />
                )}
              </div>
              <div className="flex flex-col">
                {barber.name}
                {!available && (
                  <Text size="xs" className="text-red-600">
                    Indisponível
                  </Text>
                )}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
