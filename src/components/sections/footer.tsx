import { Instagram, Mail, Phone } from "lucide-react";
import Logo from "../domain/logo";
import Text from "../ui/text";

const Footer = () => {
  return (
    <section className="flex flex-col w-full gap-4 py-5" id="contacts">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex flex-col gap-3 font-title">
          <div className="flex items-center gap-2">
            <Phone />
            <Text size="lg">{`(11) 4341-6585`}</Text>
          </div>
          <div className="flex items-center gap-2">
            <Mail />
            <Text>barbershop@gmail.com</Text>
          </div>
        </div>

        <div className="cursor-pointer">
          <Instagram />
        </div>
      </div>
    </section>
  );
};

export default Footer;
