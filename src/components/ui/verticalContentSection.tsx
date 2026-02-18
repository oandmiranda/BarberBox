import Image from "next/image";
import Heading from "./heading";
import Text from "./text";
import { Award, Check } from "lucide-react";

type VerticalContentSectionProps = {
  title: string;
  subtitle: string;
  details: string;
  imageSrc: string;
  imageAlt: string;
};

const VerticalContentSection = ({
  title,
  subtitle,
  details,
  imageSrc,
  imageAlt,
}: VerticalContentSectionProps) => {
  return (
    <section
      className={`flex flex-col items-start gap-3 w-full rounded-xl bg-surface shadow-md lg:max-w-[240px]`}
    >
      {/* image  */}
      <div
        className={`relative shrink-0 w-full overflow-hidden h-[300px] lg:h-[240px]`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover rounded-xl transition-transform duration-700 ease-out hover:scale-110"
        />
      </div>

      {/* text */}
      <div className="flex flex-col justify-start items-start text-start p-4 gap-3">
        <div className="flex items-center gap-2">
          <Heading as="h1" size="sm">
            {title}
          </Heading>
          <Check color="var(--brand-primary)" />
        </div>

        <Text size="sm" className="font-details">
          {subtitle}
        </Text>
        <div className="flex items-center gap-2">
          <Award color="var(--brand-primary)" />
          <Text size="xs">{details}</Text>
        </div>
      </div>
    </section>
  );
};

export default VerticalContentSection;
