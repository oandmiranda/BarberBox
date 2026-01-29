import Image from "next/image";
import Heading from "../ui/heading";
import { Star } from "lucide-react";
import Text from "../ui/text";
import Button from "../ui/button";
import { ServiceUiProps } from "@/types/ui/serviceProps";

const ServiceCard = ({
  imageUrl,
  imageAlt,
  name,
  description,
  durationMinutes,
  price,
  tag,
  onClick,
}: ServiceUiProps) => {
  return (
    <section
      className={`flex items-center gap-3 max-w-[350px] min-h-[80px] rounded-xl bg-surface`}
    >
      {/* image  */}
      <div className={`relative shrink-0 w-[100px] h-full`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* text */}
      <div className="flex flex-col justify-between w-full p-2 gap-2">
        <div className="flex items-center justify-between">
          <Heading as="h1" size="lg">
            {name}
          </Heading>
          <Star color="var(--brand-primary)" />
        </div>

        <div className="flex flex-col">
          <Text size="sm">{description}</Text>
          <Text size="sm">{durationMinutes}</Text>
        </div>

        <div className="flex items-center justify-between">
          <Text>{price}</Text>
          <Button variant="primary" onClick={onClick} hasSmallFontSize>
            Agendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
