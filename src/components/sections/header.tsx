import Button from "../ui/button";
import Heading from "../ui/heading";

export type HeaderProps = {
  imageBackground?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

const Header = ({
  imageBackground,
  title,
  subtitle,
  className,
}: HeaderProps) => {
  return (
    <section
      id="#home"
      className={`flex items-center justify-center w-full min-h-screen bg-center bg-cover bg-no-repeat mb-6 ${className}`}
      style={
        imageBackground
          ? { backgroundImage: `url(${imageBackground})` }
          : undefined
      }
    >
      <div className="flex flex-col items-center text-center gap-4 text-white">
        <Heading size="xxl" className="font-title">{title}</Heading>
        {subtitle && <Heading className="text-lg">{subtitle}</Heading>}
        <Button variant="link" href="#services" widthFull>Ver Serviços</Button>
      </div>
    </section>
  );
};

export default Header;
