"use client";

import { useState } from "react";
import ServiceListClient from "./serviceListClient";
import { ServiceUiWithID } from "@/types/ui/serviceProps";
import Modal from "./modal";
import Heading from "../ui/heading";
import Button from "../ui/button";

type Props = {
  services: ServiceUiWithID[];
};

export default function ServiceListController({ services }: Props) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    null,
  );
  const [activeCategory, setActiveCategory] = useState<
    "most_booked" | "premium" | null
  >(null);

  // ordena os dados alfabéticamente
  function sortServicesAlphabetically(services: ServiceUiWithID[]) {
    return [...services].sort((a, b) => a.name.localeCompare(b.name));
  }

  const orderedServices = sortServicesAlphabetically(services);

  const visibleServices = activeCategory
    ? orderedServices.filter((service) => service.tag === activeCategory)
    : orderedServices;

  function handleSelectService(serviceId: string) {
    setSelectedServiceId(serviceId);
  }

  function handleCloseModal() {
    setSelectedServiceId(null);
  }

  return (
    <>
      <Heading size="xl">Nossos Serviços</Heading>
      <div className="flex flex-wrap gap-4 mb-3 scroll-mt-[160px]" id="services">
        <Button
          variant="primary"
          onClick={() =>
            setActiveCategory((prev) =>
              prev === "most_booked" ? null : "most_booked",
            )
          }
          style="white"
        >
          Mais agendados
        </Button>

        <Button
          variant="primary"
          onClick={() =>
            setActiveCategory((prev) =>
              prev === "premium" ? null : "premium",
            )
          }
          style="white"
        >
          Premium
        </Button>
         <Button
          variant="primary"
          onClick={() => setActiveCategory(null)}
          style="white"
        >
          Todos
        </Button>
      </div>
      <ServiceListClient
        services={visibleServices}
        onSelectService={handleSelectService}
      />

      {selectedServiceId && (
        <Modal
          selectedServiceId={selectedServiceId}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
