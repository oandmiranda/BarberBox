import Image from "next/image";
import Heading from "./heading";
import Text from "./text";
import Button from "./button";

type DetailsCardProps = {
  title: string;
  details?: string | null;
  description?: string | null;
  duration?: number;
  price?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLeft?: boolean;
  imageSizes?: string;
  hasButton?: boolean;
  onClick?: () => void;
};

const DetailsCard = ({
  title,
  details,
  description,
  duration,
  price,
  imageSrc,
  imageAlt,
  imageLeft,
  imageSizes,
  hasButton,
  onClick,
}: DetailsCardProps) => {
  const hasImage = imageSrc;

  return (
    <section
      className={`
        relative group flex flex-col justify-between overflow-hidden rounded-2xl
        bg-gradient-to-br from-surface to-surface/80
        shadow-lg hover:shadow-xl
        transition-all duration-500 ease-out p-6 md:p-6 lg:flex-row
        ${imageLeft ? "flex-row-reverse" : "flex-row"}
      `}
    >
      <div className="absolute inset-0 w-[85px] h-[85px] rotate-[-20deg]">
        <Image
          src={"/assets/images/barbershop/premium.png"}
          alt="gold star"
          fill
        />
      </div>

      {/* text */}
      <div className="flex flex-col justify-between gap-4 p-4">
        <div className="space-y-4">
          <Heading as="h1" className="tracking-tight">
            {title}
          </Heading>

          <div className="flex items-center gap-1">
            <div>
              <Image
                src={"/assets/icons/about.svg"}
                alt="icone de sobre nós"
                width={23}
                height={23}
              />
            </div>
            <p style={{ fontStyle: "italic" }}>{description}</p>
          </div>

          <Text size="base" className="text-muted-foreground leading-relaxed">
            {details}
          </Text>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <Text className="text-sm text-muted-foreground">Tempo médio</Text>
            <Text size="base" className="font-semibold">
              {duration} minutos
            </Text>
          </div>

          <div>
            <Text className="text-sm text-muted-foreground">Preço</Text>
            <Text size="base" className="font-semibold text-primary">
              R${price}
            </Text>
          </div>
        </div>

        {hasButton && (
          <div className="pt-2">
            <Button variant="primary" onClick={onClick}>
              Agendar →
            </Button>
          </div>
        )}
      </div>

      {/* image */}
      {hasImage && imageAlt && (
        <div
          className={`
            relative shrink-0 overflow-hidden rounded-2xl
            ${imageSizes ?? "w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px]"}
          `}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, (max-width: 1280px) 280px, 360px"
            className="
              object-cover scale-100
              transition-transform duration-700 ease-out
              group-hover:scale-110
            "
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
    </section>
  );
};

export default DetailsCard;
