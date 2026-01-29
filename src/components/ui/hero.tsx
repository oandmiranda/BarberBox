import Button from "./button";
import Heading from "./heading";
import Text from "./text";

export type HeroProps = {
  imageBackground?: string;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  link: string;
  className?: string;
};

const Hero = ({
  imageBackground,
  title,
  subtitle,
  buttonLabel,
  link,
  className,
}: HeroProps) => {
  return (
    <section
      className={`h-containerHeight w-full p-6 flex flex-col items-start justify-center gap-6 rounded-lg object-cover ${className}`}
      style={
        imageBackground
          ? { backgroundImage: `url(${imageBackground})` }
          : undefined
      }
    >
      <div className="text-white">
        <Heading>{title}</Heading>
        {subtitle && <Text>{subtitle}</Text>}
      </div>
      <Button variant="link" href={link}>
        {buttonLabel}
      </Button>
    </section>
  );
};

export default Hero;
