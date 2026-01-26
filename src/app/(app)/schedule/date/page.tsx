export const dynamic = "force-dynamic"; // o next cachea server components por padrão, isso desativa esse comportamento e força o re-fetch a cada requisição trazendo dados do banco sempre atualizados.

import { getUnavailableDays } from "@/domain/getUnavailableDays";
import ScheduleDateClient from "./scheduleDateClient";

type PageProps = {
  searchParams: {
    serviceId: string;
  };
};

const ScheduleDatePage = async ({ searchParams }: PageProps) => {
  // próximo dia do mes a partir da data atual
  const startDate = new Date();

  // ultimo dia do mes a partir da data atual
  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + 1,
    0,
  );


  const unavailableDays = await getUnavailableDays(startDate, endDate) ?? [];

  return (
    <>
      <ScheduleDateClient
        serviceId={searchParams.serviceId}
        unavailableDays={unavailableDays}
      />
    </>
  );
};

export default ScheduleDatePage;
