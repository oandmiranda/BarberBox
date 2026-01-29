import { getLastAppointmentByUserId } from "@/actions/getLastAppointmentByUserId";
import AppointmentCard from "@/components/domain/appointmentCard";
import BackgroundSection from "@/components/ui/backgroundSection";
import Button from "@/components/ui/button";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ScheduleSuccessPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const appointment = await getLastAppointmentByUserId(user.id);
  if (!appointment) redirect("/schedule/home");

  const startDate = new Date(appointment.start_time);

  const formattedDate = startDate.toLocaleDateString("pt-BR");
  const formattedTime = startDate.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <BackgroundSection image="/assets/images/barbershop/cover.png">
      <AppointmentCard
        heading="Agendamento Confirmado"
        date={`Data: ${formattedDate}`}
        time={`Horário: ${formattedTime}`}
        serviceName={appointment.service_name}
        barberName={appointment.barber_name}
      >
        <Button variant="link" href="/" widthFull>Ver meus agendamentos</Button>
        <Button variant="link" href="/home" widthFull>Voltar para Home</Button>
      </AppointmentCard>
    </BackgroundSection>
  );
}
