import Button from "./button";
import Heading from "./heading";
import Text from "./text";

export type HeroProps = {
  imageBackground?: string;
  height?: string;
  title: string;
  hasTitleCenter?: boolean;
  titleSize?: "lg" | "xl" | "xxl";
  subtitle?: string;
  buttonLabel?: string;
  link?: string;
  className?: string;
};

const Hero = ({
  imageBackground,
  height,
  title,
  hasTitleCenter,
  titleSize,
  subtitle,
  buttonLabel,
  link,
  className,
}: HeroProps) => {
  return (
    <section
      className={`${height ?? "h-containerHeight"} w-full p-6 flex flex-col justify-center gap-6 rounded-lg object-cover bg-cover bg-center bg-no-repeat ${className} ${hasTitleCenter ? 'items-center' : 'items-start'}`}
      style={
        imageBackground
          ? { backgroundImage: `url(${imageBackground})` }
          : undefined
      }
    >
      <div className={`flex flex-col gap-1 text-white ${hasTitleCenter ? 'text-center' : ''}`}>
        <Heading size={titleSize ?? "lg"}>{title}</Heading>
        {subtitle && <Text size="base">{subtitle}</Text>}
      </div>
      {link && buttonLabel && (
        <Button variant="link" href={link}>
          {buttonLabel}
        </Button>
      )}
    </section>
  );
};

export default Hero;
