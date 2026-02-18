"use client";

import { HandHeart, Home, Lightbulb, Mail, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../domain/logo";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="justify-self-start z-90 flex flex-col justify-between w-5 h-5 group lg:hidden"
        aria-label="Toggle Menu"
      >
        <span
          className={`h-0.5 w-full bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-full bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu */}
      <nav
        className={`fixed top-0 right-0 flex flex-col items-center justify-center z-50 h-screen w-64 bg-black text-white
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="border-b-2 pb-5">
          <LogoIcon />
        </div>

        <ul className="flex flex-col gap-6 p-8 ">
          <li className="flex items-center gap-2">
            <Home size={15} color="#2ba9bd" />
            <Link href="/home" onClick={closeMenu}>Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <Star size={15} color="#2ba9bd" />
            <Link href="/#services" onClick={closeMenu}>Serviços</Link>
          </li>
          <li className="flex items-center gap-2">
            <div>
              <Image
                src={"/assets/icons/about.svg"}
                alt="icone de sobre nós"
                width={20}
                height={20}
              />
            </div>
            <Link href="/#about_us" onClick={closeMenu}>Sobre</Link>
          </li>
          <li className="flex items-center gap-2">
            <Lightbulb size={15} color="#2ba9bd"/>
            <Link href="/beard_tips" onClick={closeMenu}>Dicas</Link>
          </li>
          <li className="flex items-center gap-2">
            <HandHeart size={15} color="#2ba9bd" />
            <Link href="/recommendations" onClick={closeMenu}>Recomendações</Link>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={15} color="#2ba9bd" />
            <Link href="/#contacts" onClick={closeMenu}>Contatos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
