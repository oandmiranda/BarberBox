import Heading from "./heading";
import Text from "./text";
import Button from "./button";

type ServicePreviewProps = {
  src: string;
  alt: string;
  heading: string;
  description?: string;
  price: string;
  duration?: number;
  onClick: () => void;
};

const ServicePreview = ({
  src,
  alt,
  heading,
  price,
  duration,
  onClick,
}: ServicePreviewProps) => {
  return (
    <div className="group flex flex-col bg-secondary rounded-xl px-1.5 py-1 w-full transition-all duration-1000 hover:gap-3 hover:cursor-pointer">
      <div className="flex justify-between items-center px-2 transition-all duration-1000 group-hover:gap-3">
        <Heading size="base">{heading}</Heading>
      </div>

      {/* hidden area */}
      <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40">
        <div className="flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="relative w-12 h-12 shrink-0 transition-all duration-500 group-hover:w-16 group-hover:h-16">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex justify-between gap-7">
            <div className="flex flex-col items-center justify-between">
              <Text>{duration}</Text>
              <Text>{price}</Text>
            </div>
            <Button variant="primary" onClick={onClick}>
              Agendar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePreview;
