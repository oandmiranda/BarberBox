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
      className={`flex flex-col items-center gap-3 max-w-[240px] p-1.5 rounded-xl bg-surface`}
    >
      {/* image  */}
      <div className={`relative shrink-0 w-full h-[240px]`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes={"(max-width: 640px) 128px, (max-width: 1024px) 160px, 180px"}
          className="object-cover rounded-xl"
        />
      </div>

      {/* text */}
      <div className="flex flex-col justify-start p-4 gap-2">
        <div className="flex items-center gap-2">
          <Heading as="h1" size="lg">
            {title}
          </Heading>
          <Check color="var(--brand-primary)" />
        </div>

        <Text size="sm">{subtitle}</Text>
        <div className="flex items-center gap-2">
          <Award color="var(--brand-primary)"/>
          <Text>{details}</Text>
        </div>
      </div>
    </section>
  );
};

export default VerticalContentSection;
