"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "../ui/button";
import Logo from "../domain/logo";
import { CurrentUser } from "@/types/currentUser";
import LoginModal from "./loginModal";
import SignupModal from "./signupModal";

type Props = {
  currentUser: CurrentUser | null;
};

const Navbar = ({ currentUser }: Props) => {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") ?? "/";

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/home";
  const servicesLink = isHome ? "#services" : "/#services";
  const aboutLink = isHome ? "#about_us" : "/#about_us";
  const contactLink = isHome ? "#contacts" : "/#contacts";

  return (
    <>
      <nav
        className={`absolute top-0 left-0 w-full py-3 px-4 flex justify-between items-center text-white z-10 ${isHome ? "bg-transparent" : "bg-black/90 backdrop-blur-md"}`}
      >
        <Logo />

        <ul className="flex gap-7">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href={servicesLink}>Serviços</Link>
          </li>
          <li>
            <Link href={aboutLink}>Quem somos</Link>
          </li>
          <li>
            <Link href={contactLink}>Contato</Link>
          </li>
        </ul>

        {!currentUser ? (
          <div className="flex gap-4">
            <Button
              variant="primary"
              onClick={() => setOpenLoginModal(true)}
              hasSmallFontSize
              autoWidth
            >
              Login
            </Button>

            <Button
              variant="primary"
              onClick={() => setOpenSignupModal(true)}
              hasSmallFontSize
              autoWidth
            >
              Signup
            </Button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button variant="link" href="/profile" hasSmallFontSize autoWidth>
              {currentUser.name}
            </Button>
          </div>
        )}
      </nav>

      {openLoginModal && (
        <LoginModal onClose={() => setOpenLoginModal(false)} />
      )}

      {openSignupModal && (
        <SignupModal redirect={redirect} onClose={() => router.push(redirect)} />
      )}
    </>
  );
};

export default Navbar;
