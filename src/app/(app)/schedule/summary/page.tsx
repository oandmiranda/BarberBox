import { redirect } from "next/navigation";
import { getServiceById } from "@/domain/getServiceById";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { getBarberById } from "@/domain/getBarbersById";
import ScheduleSummaryClient from "./scheduleSummaryClient";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import Image from "next/image";
import AppointmentCard from "@/components/domain/appointmentCard";
import BackgroundSection from "@/components/ui/backgroundSection";
import Button from "@/components/ui/button";

type PageProps = {
  searchParams: {
    serviceId?: string;
    date?: string;
    time?: string;
    barberId?: string;
  };
};

const ScheduleSummaryPage = async ({ searchParams }: PageProps) => {
  const { serviceId, date, time, barberId } = searchParams;

  if (!serviceId || !date || !time || !barberId) {
    redirect(`/schedule/home`);
  }

  const service = await getServiceById(serviceId);
  if (!service) {
    redirect(`/schedule/home`);
  }

  const barber = await getBarberById(barberId);
  if (!barber) {
    redirect(`/schedule/home`);
  }

  const currentUser = await getCurrentUser();
  const isAuthenticated = !!currentUser;

  return (
    <BackgroundSection image="/assets/images/barbershop/cover.png">
      <div className="flex flex-col gap-8 text-white">
        <div className="flex flex-col items-center justify-center">
          <Heading>Resume de agendamento</Heading>
          <Heading as="h2" size="base">
            Confira os detalles da sua reserva
          </Heading>
        </div>

        <div className="flex items-center gap-6">

          {/* box 1 */}
          <AppointmentCard>
            <div className="relative w-[200px] h-[200px] rounded-full">
              {barber.imageUrl && (
                <Image
                  src={barber.imageUrl}
                  alt={barber.name}
                  className="object-cover rounded-full"
                  fill
                />
              )}
            </div>
            <Text>Você será atendido por {barber.name}</Text>
          </AppointmentCard>

          {/* box 2 */}
          <AppointmentCard
            heading="Detalhes da reserva"
            date={date}
            time={time}
            serviceName={service.name}
            barberName={barber.name}
          >
            {/* submit button */}
            <ScheduleSummaryClient
              isAuthenticated={isAuthenticated}
              service={service}
              date={date}
              time={time}
              barber={barber}
            />
            <Button variant="link" href="/">
              Voltar
            </Button>
          </AppointmentCard>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default ScheduleSummaryPage;
