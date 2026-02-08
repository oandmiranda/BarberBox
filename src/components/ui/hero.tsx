import Button from "./button";
import Heading from "./heading";
import Text from "./text";

export type HeroProps = {
  imageBackground?: string;
  title: string;
  hasTitleCenter?: boolean;
  subtitle?: string;
  buttonLabel?: string;
  link?: string;
  className?: string;
};

const Hero = ({
  imageBackground,
  title,
  hasTitleCenter,
  subtitle,
  buttonLabel,
  link,
  className,
}: HeroProps) => {
  return (
    <section
      className={`h-containerHeight w-full p-6 flex flex-col justify-center gap-6 rounded-lg object-cover ${className} ${hasTitleCenter ? 'items-center' : 'items-start'}`}
      style={
        imageBackground
          ? { backgroundImage: `url(${imageBackground})` }
          : undefined
      }
    >
      <div className={`text-white ${hasTitleCenter ? 'text-center' : ''}`}>
        <Heading>{title}</Heading>
        {subtitle && <Text>{subtitle}</Text>}
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
