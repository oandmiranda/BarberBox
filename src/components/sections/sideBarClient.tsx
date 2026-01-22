"use client";

import ServicePreview from "@/components/ui/servicePreview";

type Props = {
  services: {
    id: string;
    image_url: string;
    name: string;
    duration_minutes: number;
    price: string;
  }[];
};

const SideBarClient = ({ services }: Props) => {
  const handleSelectService = (id: string) => {
    alert(`Selected ${id}`);
  };

  return (
    <>
      {services.map((service) => (
        <ServicePreview
          key={service.id}
          src={service.image_url}
          alt={service.name}
          heading={service.name}
          duration={service.duration_minutes}
          price={service.price}
          onClick={() => handleSelectService(service.id)}
        />
      ))}
    </>
  );
};

export default SideBarClient;