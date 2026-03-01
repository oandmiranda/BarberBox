import { toZonedTime } from "date-fns-tz";
import { getLastAppointmentByUserId } from "@/actions/getLastAppointmentByUserId";
import AppointmentCard from "@/components/domain/appointmentCard";
import BackgroundSection from "@/components/ui/backgroundSection";
import Button from "@/components/ui/button";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { redirect } from "next/navigation";

export default async function ScheduleSuccessPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const appointment = await getLastAppointmentByUserId(user.id);
  if (!appointment) redirect("/schedule/home");

  const zonedDate = toZonedTime(appointment.start_time, "America/Sao_Paulo");

  const formattedDate = zonedDate.toLocaleDateString("pt-BR");

  const formattedTime = zonedDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <BackgroundSection image="/assets/images/barbershop/barbershop6.png">
      <AppointmentCard
        icon="/assets/icons/check.svg"
        heading="Agendamento Confirmado"
        date={formattedDate}
        time={formattedTime}
        serviceName={appointment.service_name}
        barberName={appointment.barber_name}
      >
        <div className="flex flex-col gap-2 w-full">
          <Button variant="link" href="/my-appointments" widthFull>
            Meus Agendamentos
          </Button>
          <Button variant="link" href="/home" style="white" widthFull>
            Voltar para Home
          </Button>
        </div>
      </AppointmentCard>
    </BackgroundSection>
  );
}
