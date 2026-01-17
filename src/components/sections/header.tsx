import Hero from "../ui/hero";
import Navbar from "./navbar";
import { HeroProps } from "../ui/hero";

type HeaderProps = HeroProps;

const Header = ({imageBackground, title, subtitle}: HeaderProps) => {
  return (
    <header>
        <Navbar />
        <Hero imageBackground={imageBackground} title={title} subtitle={subtitle} />
    </header>
  )
};

export default Header;
