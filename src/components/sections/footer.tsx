import { Instagram, Mail, Phone } from "lucide-react";
import Logo from "../domain/logo";
import Text from "../ui/text";

const Footer = () => {
  return (
    <section
      className="flex flex-col items-center w-full gap-7 py-5 px-6 bg-black text-white lg:grid lg:grid-cols-3"
      id="contacts"
    >
      <div className="flex justify-self-start">
        <Logo />
      </div>

      <div className="justify-self-center flex flex-col gap-2 font-title">
        <div className="flex items-center gap-2">
          <Phone size={17}/>
          <Text size="lg">{`(11) 4341-6585`}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={17}/>
          <Text>barberbox@gmail.com</Text>
        </div>
      </div>

      <div className="flex justify-self-end cursor-pointer">
        <Instagram />
      </div>
    </section>
  );
};

export default Footer;
