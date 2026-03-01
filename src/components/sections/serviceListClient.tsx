"use client";

import { ServiceUiWithID } from "@/types/ui/serviceProps";
import Card from "../ui/Card";
import { Clock } from "lucide-react";

type Props = {
  services: ServiceUiWithID[];
  onSelectService: (serviceId: string) => void;
};

const ServiceListClient = ({ services, onSelectService }: Props) => {
  return (
    <section
      className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3"
      id="services"
    >
      {services.map((service) => (
        <Card
          key={service.id}
          title={service.name}
          {...service} 
          details={{
            label: `${service.durationMinutes} min`,
            icon: <Clock size={18} />
          }}
          metadata={{
            label: `R$${service.price}`
          }}
          hasIcon={service.tag === "premium"}
          iconPath="/assets/images/barbershop/premium.png"
          action={{
            className: "bg-brandPrimary text-white p-2 rounded-xl hover:bg-primary/90",
            label: "Agendar",
            onClick: () => onSelectService(service.id),
          }} 
        />
      ))}
    </section>
  );
};

export default ServiceListClient;
