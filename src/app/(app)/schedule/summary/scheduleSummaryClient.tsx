"use client";

import { useState } from "react";
import { createAppointment } from "@/actions/createAppointment";
import { Barber } from "@/types/barber";
import Button from "@/components/ui/button";
import { ServiceUiWithID } from "@/types/ui/serviceProps";
import SubmitButton from "@/components/ui/submitButton";
import LoginModal from "@/components/sections/loginModal";

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
  const [showLogin, setShowLogin] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowLogin(true);
    }
  }

  return (
    <div className="z-20 flex flex-col gap-3 items-center">
      {showLogin && (

        <LoginModal onSuccess={() => setShowLogin(false)} onClose={() => setShowLogin(false)} hasSignupButtonForm/>
      )}

      <form onSubmit={handleSubmit} action={createAppointment}>
        <input type="hidden" name="serviceId" value={service.id} />
        <input type="hidden" name="date" value={date} />
        <input type="hidden" name="time" value={time} />
        <input type="hidden" name="barberId" value={barber.id} />

        <SubmitButton>Confirmar Agendamento</SubmitButton>
      </form>
        <Button variant="link" href="/#services" widthFull>
          Voltar
        </Button>
    </div>
  );
};

export default ScheduleSummaryClient;
