"use client";

import { useState, useEffect } from "react";
import { createAppointment } from "@/actions/createAppointment";
import { Barber } from "@/types/barber";
import Button from "@/components/ui/button";
import { ServiceUiWithID } from "@/types/ui/serviceProps";
import SubmitButton from "@/components/ui/submitButton";
import LoginModal from "@/components/sections/loginModal";
import SignupModal from "@/components/sections/signupModal";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import MessageModal from "@/components/ui/messageModal";
import { Undo2 } from "lucide-react";

type Props = {
  isAuthenticated: boolean;
  service: ServiceUiWithID;
  date: string;
  time: string;
  barber: Barber;
};

const ScheduleSummaryClient = ({
  isAuthenticated,
  service,
  date,
  time,
  barber,
}: Props) => {
  const router = useRouter();

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);
  const [state, formAction] = useFormState(createAppointment, null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!state) return;

    if (state.ok) {
      router.push("/schedule/success");
      return;
    }

    setErrorMessage("Este agendamento já foi realizado!");

    const timer = setTimeout(() => {
      setErrorMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [state, router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowLogin(true);
    }
  }

  // Login → abrir cadastro
  const handleOpenSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  // Cadastro → voltar para login
  const handleSignupSuccess = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  useEffect(() => {
  if (!showLoginSuccess) return;

  const timer = setTimeout(() => {
    setShowLoginSuccess(false);
  }, 3000);

  return () => clearTimeout(timer);
}, [showLoginSuccess]);

  return (
    <div className="z-20 flex flex-col gap-3 items-center">
      {showLogin && (
        <LoginModal
          onSuccess={() => {
            setShowLogin(false);
            setShowLoginSuccess(true);
          }}
          onClose={() => setShowLogin(false)}
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

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onSuccess={handleSignupSuccess}
          role="CLIENT"
        />
      )}

      <form onSubmit={handleSubmit} action={formAction}>
        <input type="hidden" name="serviceId" value={service.id} />
        <input type="hidden" name="date" value={date} />
        <input type="hidden" name="time" value={time} />
        <input type="hidden" name="barberId" value={barber.id} />

        <SubmitButton>Confirmar Agendamento</SubmitButton>
      </form>

      <Button
        style="transparent"
        variant="link"
        href="/#services"
        icon={<Undo2 size={15} />}
        widthFull
      >
        Voltar
      </Button>

      {errorMessage && (
        <MessageModal
          message={errorMessage}
          backgroundColor="bg-yellow-600"
          icon="/assets/icons/warning.svg"
        />
      )}
    </div>
  );
};

export default ScheduleSummaryClient;
