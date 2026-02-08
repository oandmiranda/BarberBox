"use client";

import ServiceCard from "../domain/serviceCard";
import { ServiceUiWithID } from "@/types/ui/serviceProps";

type Props = {
  services: ServiceUiWithID[];
  onSelectService: (serviceId: string) => void;
}

const ServiceListClient = ({ services, onSelectService }: Props) => {

  // ordena os dados alfabéticamente
  function sortServicesAlphabetically(services: ServiceUiWithID[]) {
    return [...services].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  const orderedServices = sortServicesAlphabetically(services);

  return (
    <section className="grid grid-cols-3 gap-4" id="services">
      {orderedServices.map((service) => (
        <ServiceCard key={service.id} {...service} onClick={() => onSelectService(service.id)} isPremium={service.tag === 'premium'} />
      ))}
    </section>
  );
};

export default ServiceListClient;
