"use client";

import { useState } from "react";
import Overlay from "@/components/ui/overlay";
import LoginForm from "@/components/auth/loginForm";
import { Service } from "@/types/listServices";
import { createAppointment } from "@/actions/createAppointment";

type Props = {
  isAuthenticated: boolean;
  service: Service;
  date: string;
  time: string;
};

const ScheduleSummaryClient = ({
  isAuthenticated,
  service,
  date,
  time,
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
        <p>Serviço: {service.name}</p>
        <p>Data: {date}</p>
        <p>Horário: {time}</p>
      </div>

      <form onSubmit={handleSubmit} action={createAppointment}>
        <input type="hidden" name="serviceId" value={service.id} />
        <input type="hidden" name="date" value={date} />
        <input type="hidden" name="time" value={time} />

        <button type="submit" className="bg-secondary p-4">
          Confirmar agendamento
        </button>
      </form>
    </>
  );
};

export default ScheduleSummaryClient;
