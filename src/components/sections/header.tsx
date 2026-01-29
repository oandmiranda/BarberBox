import Heading from "../ui/heading";

export type HeaderProps = {
  imageBackground?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

const Header = ({ imageBackground, title, subtitle, className }: HeaderProps) => {
  return (
    <section
      className={`flex items-center justify-center w-full min-h-screen bg-center bg-cover bg-no-repeat mb-6 ${className}`}
      style={imageBackground ? { backgroundImage: `url(${imageBackground})` } : undefined}
    >
      <div className="text-center text-white">
      <Heading size="xxl" className="font-bold font-title">{title}</Heading>
        {subtitle && <Heading className="mt-2 text-lg">{subtitle}</Heading>}
      </div>
    </section>
  );
};

export default Header;