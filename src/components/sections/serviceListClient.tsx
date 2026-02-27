"use client";

import ServiceCard from "../domain/serviceCard";
import { ServiceUiWithID } from "@/types/ui/serviceProps";

type Props = {
  services: ServiceUiWithID[];
  onSelectService: (serviceId: string) => void;
}

const ServiceListClient = ({ services, onSelectService }: Props) => {


  return (
    <section className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} onClick={() => onSelectService(service.id)} isPremium={service.tag === 'premium'} />
      ))}
    </section>
  );
};

export default ServiceListClient;
