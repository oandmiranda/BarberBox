"use client";

import Modal from "@/components/sections/modal";
import Container from "@/components/ui/container";
import DetailsCard from "@/components/ui/detailsCard";
import Hero from "@/components/ui/hero";
import { ServiceUiWithID } from "@/types/ui/serviceProps";
import { useState } from "react";

type PremiumServicesProps = {
  services: ServiceUiWithID[];
};

export default function PremiumServicesPageClient({
  services,
}: PremiumServicesProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );

  function handleSelectService(serviceId: string) {
    setSelectedServiceId(serviceId);
  }

  function handleCloseModal() {
    setSelectedServiceId(null);
  }

  return (
    <section className="py-[125px] flex flex-col items-center justify-center">
      <div className="w-[70%] mb-5">
        <Hero
          imageBackground="/assets/images/barbershop/barbershop4.png"
          title="Serviços prêmium para você"
          subtitle="Os melhores serviços disponíveis para você e para toda sua família"
          hasTitleCenter
        />
      </div>
      <Container>
        {services.map((service) => (
          <div key={service.id} className="mx-auto py-4 w-[80%]">
            <DetailsCard
              title={service.name}
              description={service.description}
              imageSrc={service.imageUrl}
              imageAlt={service.name}
              duration={service.durationMinutes}
              price={service.price}
              hasButton={true}
              onClick={() => handleSelectService(service.id)}
            />
          </div>
        ))}
      </Container>

      {selectedServiceId && (
        <Modal
          selectedServiceId={selectedServiceId}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
