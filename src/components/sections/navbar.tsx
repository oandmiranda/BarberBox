"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../ui/button";
import Logo from "../domain/logo";
import { CurrentUser } from "@/types/currentUser";

type Props = {
  currentUser: CurrentUser | null;
};

const Navbar = ({ currentUser }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY >= 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-3 px-4 flex justify-between items-center text-white z-10 transition-colors duration-300
      ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}
    >
      <Logo />

      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Serviços</Link>
        </li>
        <li>
          <Link href="/about">Quem somos</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>

      {!currentUser ? (
        <div className="flex gap-6">
          <Button variant="link" href="/login">
            Entrar
          </Button>
          <Button variant="link" href="/register/client">
            Cadastre-se
          </Button>
        </div>
      ) : (
        <div className="flex gap-6">
          <Button variant="link" href="/profile">
            {`Olá ${currentUser.name}`}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
