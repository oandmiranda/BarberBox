import { getServiceById } from "@/lib/services/getServiceById";
import { redirect } from "next/navigation";

type PageProps = {
  searchParams: {
    serviceId?: string;
  };
};

export default async function ScheduleDatePage({ searchParams }: PageProps) {
  const serviceId = searchParams.serviceId;

  if (!serviceId) {
    redirect("/schedule/choose-service");
  }

  const service = await getServiceById(serviceId);

  if (!service) {
    redirect("/schedule/choose-service");
  }

  return (
    <div>
      <h2>Escolha a data</h2>

      <p>Serviço selecionado: {service.name}</p>
      {service.description && (
        <p>Descrição do serviço: {service.description}</p>
      )}

      {/* aqui entra o calendário */}
    </div>
  );
}
