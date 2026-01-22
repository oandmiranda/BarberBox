import Hero from "../ui/hero";
import { HeroProps } from "../ui/hero";

type HeaderProps = HeroProps;

const Header = ({imageBackground, title, subtitle}: HeaderProps) => {
  return (
    <header>
        <Hero imageBackground={imageBackground} title={title} subtitle={subtitle} className="mt-8"/>
    </header>
  )
};

export default Header;
