"use client";

import { useState } from "react";
import Overlay from "@/components/ui/overlay";
import LoginForm from "@/components/auth/loginForm";
import { createAppointment } from "@/actions/createAppointment";
import { Barber } from "@/types/barber";
import Button from "@/components/ui/button";
import { ServiceUiWithID } from "@/types/ui/serviceProps";

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
    <div className="z-20">
      {showLogin && (
        <Overlay>
          <LoginForm onSuccess={() => setShowLogin(false)}/>
        </Overlay>
      )}

      <form onSubmit={handleSubmit} action={createAppointment}>
        <input type="hidden" name="serviceId" value={service.id} />
        <input type="hidden" name="date" value={date} />
        <input type="hidden" name="time" value={time} />
        <input type="hidden" name="barberId" value={barber.id} />

        <Button variant="primary" type="submit" widthFull>
          Confirmar Agendamento
        </Button>
      </form>
    </div>
  );
};

export default ScheduleSummaryClient;