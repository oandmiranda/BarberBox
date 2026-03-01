import Image from "next/image";
import Heading from "./heading";
import Text from "./text";

type BackgroundColor = "SCHEDULED" | "COMPLETED" | "CANCELED" | "DEFAULT";

type CardProps = {
  backgroundColor?: BackgroundColor;
  title: string;
  subtitle?: string | null;
  imageUrl: string;
  imageAlt: string;
  details: {
    label: string;
    icon: React.ReactNode;
  };
  metadata: {
    label: string;
    className?: string;
    icon?: React.ReactNode;
  };
  hasIcon?: boolean;
  iconPath?: string;
  action?: {
    label: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
  };
};

// mapper
const backgroundMap: Record<BackgroundColor, string> = {
  SCHEDULED: "bg-blue-100/90",
  COMPLETED: "bg-green-100 opacity-50 pointer-events-none",
  CANCELED: "bg-red-100 opacity-50 pointer-events-none",
  DEFAULT: "bg-surface",
};

// normalize function to ensure that the image path never breaks in runtime
function normalizeImagePath(path?: string) {
  if (!path) return "/assets/images/barbershop/barbershop.png";

  if (path.startsWith("http")) return path;

  return path.startsWith("/") ? path : `/${path}`;
}

const Card = ({
  imageUrl,
  imageAlt = "",
  backgroundColor,
  title,
  subtitle,
  details,
  metadata,
  hasIcon,
  iconPath,
  action,
}: CardProps) => {
  const safeSrc = normalizeImagePath(imageUrl);

  return (
    <section
      className={`relative flex items-center gap-3 w-full min-h-[140px] max-h-[300px] rounded-xl p-1 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:-translate-l-1 md:max-w-[360px] ${backgroundMap[backgroundColor ?? "DEFAULT"]}`}
    >
      {/* image  */}
      <div className={`relative shrink-0 w-[110px] h-full`}>
        <Image
          src={safeSrc}
          alt={imageAlt}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {hasIcon && iconPath && (
        <div className="absolute top-[-30px] right-[-20px] w-[75px] h-[75px] rotate-[-20deg]">
          <Image src={iconPath} alt="gold star" fill />
        </div>
      )}

      {/* text */}
      <div className="flex flex-col justify-between w-full gap-2  sm:p-2">
        <div className="flex items-center justify-between">
          <Heading as="h1" size="sm">
            {title}
          </Heading>
        </div>
        {subtitle && (
          <div className="flex items-center justify-between">
            <Text size="xs" className="text-gray-500">
              {subtitle}
            </Text>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Text>{details.icon}</Text>
            <Text size="xs">{details.label}</Text>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Text className={metadata.className}>
            {metadata.label}
            {metadata.icon}
          </Text>
          {action && (
            <button
              onClick={action.onClick}
              className={`${action.className} w-auto text-xs`}
              disabled={action.disabled}
            >
              {action.label}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;
