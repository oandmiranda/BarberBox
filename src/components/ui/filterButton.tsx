import { baseButtonClasses } from "@/lib/ui/classes";

type FilterColor = "scheduled" | "completed" | "canceled" | "default";

type FilterButtonProps = {
  label: string;
  color?: FilterColor;
  onClick: () => void;
};

const baseClasses = baseButtonClasses;

const colors = {
  scheduled:
    "bg-blue-100 text-blue-700 rounded-md min-w-[120px] hover:bg-blue-200",
  completed:
    "bg-green-100 text-green-700 rounded-md min-w-[120px] hover:bg-green-200",
  canceled: "bg-red-100 text-red-700 rounded-md min-w-[120px] hover:bg-red-200",
  default: "bg-gray-300 text-black rounded-md min-w-[120px] hover:bg-gray-200",
};

export default function FilterButton({
  label,
  color,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colors[color ?? "default"]}`}
    >
      {label}
    </button>
  );
}
