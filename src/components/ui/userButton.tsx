"use client";

import { logoutUser } from "@/actions/logout";
import { ArrowDown, CalendarSearch, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Text from "./text";
import MessageModal from "./messageModal";

type Props = {
  label: string;
  currentUserEmail: string;
};

export default function UserButton({ label, currentUserEmail }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogOutMessage, setShowLogOutMessage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLogOut = async () => {
    setTimeout(async () => {
      await logoutUser();
    }, 3000);
    
    setShowLogOutMessage(true)
  };

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    setShowMenu(false);
    router.push(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current) return;

      if (!containerRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    
    <div className="relative justify-self-end" ref={containerRef}>
      { showLogOutMessage && (
        <MessageModal backgroundColor="bg-green-600" message="Sessão encerrada com sucesso" icon="/assets/icons/check.svg"/>
      )}

      <button
        onClick={handleToggleMenu}
        className="
          group
          flex items-center gap-2
          px-3 py-2.5
          rounded-full
          bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900
          border border-white/10
          backdrop-blur-md
          shadow-lg shadow-black/30
          transition-all duration-300 ease-out
          hover:shadow-xl hover:shadow-black/40
          hover:-translate-y-0.5
          active:translate-y-0
        "
      >
        <span className="text-sm text-zinc-400 tracking-wide">Olá,</span>

        <strong className="text-sm font-semibold text-white tracking-tight">
          {label}
        </strong>

        <ArrowDown
          size={16}
          className="
            text-zinc-400
            transition-all duration-300 ease-out
            group-hover:text-white cursor-pointer
           
          "
        />
      </button>

      {showMenu && (
        <div
          className="
            absolute right-0 top-7 w-auto sm:w-56
            rounded-2xl
            bg-zinc-900/95
            backdrop-blur-xl
            border border-white/10
            shadow-2xl shadow-black/40
            p-4 font-body
            animate-in fade-in zoom-in-95 duration-200
          "
        >
          <div className="flex flex-col gap-4 text-sm text-zinc-300">
            <button
              onClick={() => handleNavigate("/my-appointments")}
              className="flex items-center gap-2 text-left hover:text-white transition-colors"
            >
              <CalendarSearch size={15} />
              Meus Agendamentos
            </button>
            <button onClick={handleLogOut}>
              <button
                className="flex items-center gap-2 text-left text-red-400 hover:text-red-300 transition-colors border-b border-zinc-500 pb-2 w-full"
              >
                <LogOut size={15} />
                Sair
              </button>
            </button>
            <Text size="xs" className="italic text-">{currentUserEmail}</Text>
          </div>
        </div>
      )}
    </div>
  );
}
