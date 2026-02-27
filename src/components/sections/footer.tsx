"use client"

import { House, Lightbulb, Mail, Phone, ShieldCheck, Sparkle } from "lucide-react";
import Logo from "../domain/logo";
import Text from "../ui/text";
import Link from "next/link";
import { useIsHome } from "@/hook/useIsHome";

const Footer = () => {
  const isHome = useIsHome();
  const aboutLink = isHome ? "#about_us" : "/#about_us";
  const servicesLink = isHome ? "#services" : "/#services";
  return (
    <section
      className="flex flex-col items-center w-full gap-7 py-8 px-6 bg-black text-white lg:grid lg:grid-cols-3"
      id="contacts"
    >
      <div className="flex justify-self-start">
        <Logo />
      </div>

      <div className="justify-self-center">
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2 transition-all duration-300 hover:text-secondary">
            <House size={15} />
            <Link href={aboutLink}>Nossa história</Link>
          </li>
          <li className="flex items-center gap-2 transition-all duration-300 hover:text-secondary">
            <ShieldCheck size={15} />
            <Link href={servicesLink}>Serviços</Link>
          </li>

          <li className="flex items-center gap-2 transition-all duration-300 hover:text-secondary">
            <ShieldCheck size={15} />
            <Link href={"/premium_services"}>Serviços Premium</Link>
          </li>
          <li className="flex items-center gap-2 transition-all duration-300 hover:text-secondary">
            <Sparkle size={15} />
            <Link href={"/beard_tips"}>Dicas para fazer a barba</Link>
          </li>
          <li className="flex items-center gap-2 transition-all duration-300 hover:text-secondary">
            <Lightbulb size={15} />
            <Link href={"/recommendations"}>
              Recomendações de produtos para sua barba
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2 font-title justify-self-end cursor-default">
        <div className="flex items-center gap-2">
          <Phone size={17} />
          <Text size="lg">{`(11) 4341-6585`}</Text>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={17} />
          <Text>barberbox@gmail.com</Text>
        </div>
      </div>
    </section>
  );
};

export default Footer;
