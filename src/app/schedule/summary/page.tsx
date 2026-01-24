import { redirect } from "next/navigation";
import { getServiceById } from "@/queries/getServiceById";
import { getCurrentUser } from "@/auth/getCurrentUser";
import ScheduleSummaryClient from "./scheduleSummaryClient";

type PageProps = {
  searchParams: {
    serviceId?: string;
    date?: string;
    time?: string;
  };
};

const ScheduleSummaryPage = async ({ searchParams }: PageProps) => {
  const { serviceId, date, time } = searchParams;
    
  if (!serviceId || !date || !time) {
    redirect(`/schedule/date?serviceId=${serviceId}`);
  }

  const service = await getServiceById(serviceId);
  if (!service) {
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
    />
  );
};

export default ScheduleSummaryPage;
