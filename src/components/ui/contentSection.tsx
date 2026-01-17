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
};

const ContentSection = ({
  badge,
  title,
  description,
  stats,
  imageSrc,
  imageAlt,
}: ContentSection) => {
  const hasImage = imageSrc;

  return (
    <section className="flex gap-2 mx-auto max-w-3xl">
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
        <div className="shrink-0">
          <Image src={imageSrc} alt={imageAlt} width={200} height={200} />
        </div>
      )}
    </section>
  );
};

export default ContentSection;
