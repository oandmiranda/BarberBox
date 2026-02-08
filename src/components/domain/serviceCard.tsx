import Image from "next/image";
import Heading from "../ui/heading";
import { Clock } from "lucide-react";
import Text from "../ui/text";
import Button from "../ui/button";

type ServiceCardProps = {
  name: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  durationMinutes: number;
  price: string;
  isPremium?: boolean;
  onClick: () => void;
};

// normalize function to ensure that the image path never breaks in runtime 
function normalizeImagePath(path?: string) {
  if (!path) return "/assets/images/barbershop/barbershop.png";

  if (path.startsWith("http")) return path;

  return path.startsWith("/") ? path : `/${path}`;
}

const ServiceCard = ({
  imageUrl,
  imageAlt,
  name,
  durationMinutes,
  price,
  isPremium,
  onClick,
}: ServiceCardProps) => {
  
  const safeSrc = normalizeImagePath(imageUrl);

  return (
    <section
      className={`relative flex items-center gap-3 max-w-[350px] h-[140px] rounded-xl bg-surface p-1 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:-translate-l-1"`}
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

      {isPremium && (
        <Image
          src={"/assets/images/barbershop/premium_service.png"}
          alt="gold star"
          width={40}
          height={40}
          className="absolute top-1 right-1"
        />
      )}

      {/* text */}
      <div className="flex flex-col justify-between w-full gap-2 p-2">
        <div className="flex items-center justify-between">
          <Heading as="h1" size="base">
            {name}
          </Heading>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Clock size={18} />
            <Text size="xs">{`${durationMinutes} minutos`}</Text>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Text>{`R$ ${price}`}</Text>
          <Button
            variant="primary"
            onClick={onClick}
            hasSmallFontSize
            autoWidth
          >
            Agendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
