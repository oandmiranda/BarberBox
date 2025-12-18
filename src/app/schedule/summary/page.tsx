import { redirect } from "next/navigation";
import { getServiceById } from "@/lib/services/getServiceById";
import { getCurrentUser } from "@/lib/auth";

type PageProps = {
  searchParams: {
    serviceId?: string;
    date?: string;
    time?: string;
  };
};

export default async function ScheduleSummaryPage({ searchParams }: PageProps) {
  const { serviceId, date, time } = searchParams;

  if (!serviceId || !date || !time) {
    redirect("/schedule/choose-service");
  }

  const service = await getServiceById(serviceId);
  if (!service) {
    redirect("/schedule/choose-service");
  }

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    redirect("/schedule/choose-service");
  }

  const user = await getCurrentUser();

if (!user) {
  const callbackUrl = encodeURIComponent(
    `/schedule/summary?serviceId=${serviceId}&date=${date}&time=${time}`
  );

  redirect(`/login?callbackUrl=${callbackUrl}`);
}

  return (
    <div>
      <div>
        <h2>Confirme seu agendamento</h2>

        <p>Serviço: {service.name}</p>
        <p>Data: {new Date(date).toLocaleDateString()}</p>
        <p>Horário: {time}</p>

        <form action="/api/appointments" method="POST">
          <input type="hidden" name="serviceId" value={serviceId} />
          <input type="hidden" name="date" value={date} />
          <input type="hidden" name="time" value={time} />

          <button type="submit">Confirmar agendamento</button>
        </form>
      </div>
    </div>
  );
}
