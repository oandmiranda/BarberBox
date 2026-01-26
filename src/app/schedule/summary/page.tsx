import { redirect } from "next/navigation";
import { getServiceById } from "@/domain/getServiceById";
import { getCurrentUser } from "@/domain/auth/getCurrentUser";
import ScheduleSummaryClient from "./scheduleSummaryClient";
import { getBarberById } from "@/domain/getBarbersById";

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
    redirect(`/schedule/date?serviceId=${serviceId}`);
  }

  const service = await getServiceById(serviceId);
  if (!service) {
    redirect(`/schedule/date?serviceId=${serviceId}`);
  }

  const barber = await getBarberById(barberId)
  if (!barber) {
    redirect(`/schedule/date?serviceId=${serviceId}`);
  }

  const currentUser = await getCurrentUser();
  const isAuthenticated = !!currentUser;

  return (
    <ScheduleSummaryClient
      isAuthenticated={isAuthenticated}
      service={service}
      date={date}
      time={time}
      barber={barber}
    />
  );
};

export default ScheduleSummaryPage;
