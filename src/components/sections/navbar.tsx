"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Button from "../ui/button";
import Logo from "../domain/logo";
import { CurrentUser } from "@/types/currentUser";
import LoginModal from "./loginModal";
import SignupModal from "./signupModal";
import MessageModal from "../ui/messageModal";
import BurgerMenu from "../ui/burgerMenu";
import { User } from "lucide-react";
import UserButton from "../ui/userButton";
import { useIsHome } from "@/hook/useIsHome";

type Props = {
  currentUser: CurrentUser | null;
};

const Navbar = ({ currentUser }: Props) => {
  const router = useRouter();
  const isHome = useIsHome();
  const searchParams = useSearchParams();

  // sempre derive valores do searchParams
  const redirect = searchParams.get("redirect") ?? undefined;
  const authFlow = useMemo(() => {
    return searchParams.get("auth");
  }, [searchParams]);

  const [scrolled, setScrolled] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const servicesLink = isHome ? "#services" : "/#services";
  const aboutLink = isHome ? "#about_us" : "/#about_us";
  const contactLink = isHome ? "#contacts" : "/#contacts";

    // Login → abrir cadastro
  const handleOpenSignup = () => {
    setOpenLoginModal(false);
    setOpenSignupModal(true);
  };

  const handleSignupSuccess = () => {
    setOpenSignupModal(false);
    setOpenLoginModal(true);
  };

  // open LoginModal after register
  useEffect(() => {
    if (authFlow !== "signup-success") return;
    if (currentUser) return;

    setOpenLoginModal(true);

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("auth");

    const query = newParams.toString();
    router.replace(query ? `/home?${query}` : "/home");
  }, [authFlow, currentUser, router, searchParams]);

  useEffect(() => {
    const shouldOpen = sessionStorage.getItem("afterSignupOpenLogin");

    if (shouldOpen === "true") {
      setOpenLoginModal(true);
      sessionStorage.removeItem("afterSignupOpenLogin");
    }
  }, [isHome]);

  // handle scroll
  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!showLoginSuccess) return;

    const timer = setTimeout(() => {
      setShowLoginSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showLoginSuccess]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full min-w-[210px] grid grid-cols-3 items-center font-details text-white z-50 transition-colors duration-300 py-4 sm:py-2 px-4 lg:px-6 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="justify-self-start">
          <ul className="hidden gap-7 lg:flex">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href={servicesLink}>Serviços</Link>
            </li>
            <li>
              <Link href={aboutLink}>Sobre</Link>
            </li>
            <li>
              <Link href={contactLink}>Contato</Link>
            </li>
          </ul>

          <BurgerMenu />
        </div>

        <div className="justify-self-center">
          <Logo className="hidden sm:flex" />
        </div>

        {!currentUser ? (
          <div className="justify-self-end flex items-center gap-2 font-body">
            <Button
              variant="primary"
              onClick={() => setOpenLoginModal(true)}
              autoWidth
              icon={<User size={15} />}
            >
              Entrar
            </Button>
          </div>
        ) : (
          <>
            <UserButton label={currentUser.name} />
          </>
        )}
      </nav>

      {openLoginModal && (
        <LoginModal
          title="Faça Login ou Cadastre-se"
          onClose={() => setOpenLoginModal(false)}
          onSuccess={() => {
            setOpenLoginModal(false);
            setShowLoginSuccess(true);
          }}
          hasSignupButtonForm
          onOpenSignup={handleOpenSignup}
        />
      )}

      {showLoginSuccess && (
        <MessageModal
          message="Login realizado com sucesso!"
          backgroundColor="bg-green-600"
          icon="/assets/icons/check.svg"
        />
      )}

      {openSignupModal && (
        <SignupModal
          redirect={redirect}
          onClose={() => setOpenSignupModal(false)}
          onSuccess={handleSignupSuccess}
          role="CLIENT"
        />
      )}
    </>
  );
};

export default Navbar;
