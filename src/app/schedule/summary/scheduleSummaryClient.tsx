"use client";

import { useState } from "react";
import Overlay from "@/components/ui/overlay";
import LoginForm from "@/components/auth/loginForm";
import { Service } from "@/types/listServices";
import { createAppointment } from "@/actions/createAppointment";
import { Barber } from "@/types/barber";

type Props = {
  isAuthenticated: boolean;
  service: Service;
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
    <>
      {showLogin && (
        <Overlay>
          <LoginForm onSuccess={() => setShowLogin(false)}/>
        </Overlay>
      )}

      <div>
        <div>
          <p>Serviço: {service.name}</p>
          <p>Data: {date}</p>
          <p>Horário: {time}</p>
          <p>Barbeiro: {barber.name}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} action={createAppointment}>
        <input type="hidden" name="serviceId" value={service.id} />
        <input type="hidden" name="date" value={date} />
        <input type="hidden" name="time" value={time} />
        <input type="hidden" name="barberId" value={barber.id} />

        <button type="submit" className="bg-secondary p-4">
          Confirmar agendamento
        </button>
      </form>
    </>
  );
};

export default ScheduleSummaryClient;
