import Image from "next/image";
import Heading from "./heading";
import Text from "./text";

type StatItem = {
  value: string;
  subtitle: string;
};

type ContentSection = {
  badge?: string;
  title: string;
  description?: string;
  stats?: StatItem[];
  imageSrc?: string;
  imageAlt?: string;
  imageLeft?: boolean;
};

const ContentSection = ({
  badge,
  title,
  description,
  stats,
  imageSrc,
  imageAlt,
  imageLeft,
}: ContentSection) => {
  const hasImage = imageSrc;

  return (
    <section
      className={`flex gap-3 mx-auto max-w-3xl ${imageLeft ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="flex flex-col gap-3">
        <Heading as="h3" size="base">
          {badge}
        </Heading>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <div className="flex gap-5">
          {stats?.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <Text>{stat.value}</Text>
              <Text size="xs">{stat.subtitle}</Text>
            </div>
          ))}
        </div>
      </div>

      {hasImage && imageAlt && (
        <div className="relative shrink-0 w-[300px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 128px,
             (max-width: 1024px) 160px,
             180px"
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default ContentSection;
