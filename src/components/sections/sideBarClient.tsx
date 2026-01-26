"use client";

import ServicePreview from "@/components/ui/servicePreview";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  function handleSchedule(serviceId: string) {
    router.push(`/schedule/date?serviceId=${serviceId}`);
  }
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
          onClick={() => handleSchedule(service.id)}
        />
      ))}
    </>
  );
};

export default SideBarClient;
