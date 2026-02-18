import { redirect } from "next/navigation";
import { getServiceById } from "@/domain/getServiceById";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import { getBarberById } from "@/domain/getBarbersById";
import ScheduleSummaryClient from "./scheduleSummaryClient";
import Text from "@/components/ui/text";
import Image from "next/image";
import AppointmentCard from "@/components/domain/appointmentCard";
import BackgroundSection from "@/components/ui/backgroundSection";
import { mapServiceToUI } from "@/application/mapper";

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

const serviceEntity = await getServiceById(serviceId);
  if (!serviceEntity) {
    redirect(`/home`);
  }

  const service = mapServiceToUI(serviceEntity);

  const barber = await getBarberById(barberId);
  if (!barber) {
    redirect(`/home`);
  }

  const currentUser = await getCurrentUser();
  const isAuthenticated = !!currentUser;

  return (
    <BackgroundSection image="/assets/images/barbershop/barbershop4.png">
      <div className="flex flex-col gap-4 text-white">
        <div className="flex flex-col items-center gap-y-2 gap-x-6">
          <div className="w-full flex flex-col items-center gap-2 sm:flex-row">
            {/* box 1 */}
            <AppointmentCard>
              <div className="relative rounded-full w-7 h-7 sm:w-[100px] sm:h-[100px]">
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
                <Text>
                  Você será atendido por <strong className="text-brandPrimary">{barber.name}</strong>
                </Text>
              </div>
            </AppointmentCard>

            <AppointmentCard>
              <div className="relative rounded-full w-7 h-7 sm:w-[100px] sm:h-[100px]">
                  <Image
                    src={service.imageUrl}
                    alt={service.name}
                    className="object-cover rounded-full"
                    fill
                  />
              </div>
              <div className="flex items-center gap-1">
                <Text>
                  Serviço: <strong className="text-brandPrimary">{service.name}</strong>
                </Text>
              </div>
            </AppointmentCard>
          </div>

            {/* box 2 */}
            <AppointmentCard
              heading="Detalhes da reserva"
              date={date}
              time={time}
              description={service.description}
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
