import Heading from "../ui/heading";

export type HeaderProps = {
  imageBackground?: string;
  title: React.ReactNode;
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
      <div className="flex flex-col justify-around items-center gap-1 text-center text-white px-4">
        <Heading size="xxxl" fontFamily="font-title">{title}</Heading>
        {subtitle && <Heading size="base">{subtitle}</Heading>}
      </div>
    </section>
  );
};

export default Header;
