"use client";

import ServiceCard from "../domain/serviceCard";
import { ServiceUiWithID } from "@/types/ui/serviceProps";

type Props = {
  services: ServiceUiWithID[];
  onSelectService: (serviceId: string) => void;
}

const ServiceListClient = ({ services, onSelectService }: Props) => {

  return (
    <section className="grid grid-cols-3 gap-4">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} onClick={() => onSelectService(service.id)} />
      ))}
    </section>
  );
};

export default ServiceListClient;
