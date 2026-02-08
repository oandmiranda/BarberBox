import getActiveServicesForUI from "@/application/getActiveServicesForUI";
import ServiceListController from "./serviceListController";
import Heading from "../ui/heading";

const ServiceList = async () => {
  const services = await getActiveServicesForUI();

  return (
    <section className="flex flex-col gap-2">
      {/* necessário para manter divisão de responsabilidade entre server x client */}
      <Heading>Nossos Serviços</Heading>
      <ServiceListController services={services} />
    </section>
  );
};

export default ServiceList;
