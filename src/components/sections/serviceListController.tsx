"use client";

import { useState } from "react";
import ServiceListClient from "./serviceListClient";
import { ServiceUiWithID } from "@/types/ui/serviceProps";
import Modal from "./modal";

type Props = {
  services: ServiceUiWithID[];
};

export default function ServiceListController({ services }: Props) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  function handleSelectService(serviceId: string) {
    setSelectedServiceId(serviceId);
  }

    function handleCloseModal() {
    setSelectedServiceId(null);
  }

  return (
    <>
      <ServiceListClient
        services={services}
        onSelectService={handleSelectService}
      />

      {selectedServiceId && (
        <Modal selectedServiceId={selectedServiceId} onClose={handleCloseModal}/>
      )}
    </>
  );
}