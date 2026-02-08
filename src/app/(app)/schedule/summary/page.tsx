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
import { Check } from "lucide-react";

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
    redirect(`/home`);
  }

  const service = await getServiceById(serviceId);
  if (!service) {
    redirect(`/home`);
  }

  const barber = await getBarberById(barberId);
  if (!barber) {
    redirect(`/home`);
  }

  const currentUser = await getCurrentUser();
  const isAuthenticated = !!currentUser;

  return (
    <BackgroundSection image="/assets/images/barbershop/barbershop4.png">
      <div className="mt-2 flex flex-col gap-4 text-white font-details">
        <div className="flex flex-col items-center justify-center">
          <Heading>Confira os detalhes da sua reserva</Heading>
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
            <div className="flex items-center gap-1">
              <Text>Você será atendido por <strong>{barber.name}</strong></Text>
              <Check />
            </div>
          </AppointmentCard>

          {/* box 2 */}
          <AppointmentCard
            heading="Detalhes da reserva"
            date={date}
            time={time}
            serviceName={service.name}
          >
            {/* submit button */}
            <ScheduleSummaryClient
              isAuthenticated={isAuthenticated}
              service={service}
              date={date}
              time={time}
              barber={barber}
            />
          </AppointmentCard>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default ScheduleSummaryPage;
