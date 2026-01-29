import Image from "next/image";
import Heading from "./heading";
import Text from "./text";
import { TitleSizes } from "@/types/ui/titleSizes";
import Button from "./button";
import { SubTitleSizes } from "@/types/ui/subtitleSizes";
import { LucideIcon } from "lucide-react";

type StatItem = {
  value: string;
  subtitle: string;
};

type ContentSectionProps = {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  titleSize?: TitleSizes;
  subtitle?: string;
  subtitleSize?: SubTitleSizes;
  stats?: StatItem[];
  imageSrc?: string;
  imageAlt?: string;
  imageLeft?: boolean;
  imageSizes?: string;
  hasButton?: boolean;
};

const ContentSection = ({
  badge,
  badgeIcon: Icon,
  title,
  titleSize,
  subtitle,
  subtitleSize,
  stats,
  imageSrc,
  imageAlt,
  imageLeft,
  imageSizes,
  hasButton,
}: ContentSectionProps) => {
  const hasImage = imageSrc;

  return (
    <section
      className={`flex gap-3 mx-auto max-w-3xl ${imageLeft ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* text */}
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-2 bg-surface p-2 w-fit rounded-full">
          {Icon && <Icon size={20} color="var(--brand-primary)" />}
          <Heading as="h2" size="xs" className="text-brandPrimary">
            {badge}
          </Heading>
        </div>

        <Heading as="h1" size={titleSize ?? "xl"} className="font-subtitle">
          {title}
        </Heading>
        <Text size={subtitleSize ?? "base"}>{subtitle}</Text>
        <div className="flex gap-5">
          {stats?.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <Heading size="xl">{stat.value}</Heading>
              <Text as="span" size="xs">
                {stat.subtitle}
              </Text>
            </div>
          ))}
        </div>
        {hasButton && (
          <Button variant="link" href="/" hasSmallFontSize>
            Ver mais
          </Button>
        )}
      </div>

      {/* image */}
      {hasImage && imageAlt && (
        <div
          className={`relative shrink-0 ${imageSizes ?? "w-[320px] h-[350px]"}`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={
              imageSizes ??
              "(max-width: 640px) 128px, (max-width: 1024px) 160px, 180px"
            } // informa ao navegador qual versão da imagem carregar com base no tamanho da tela
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default ContentSection;
