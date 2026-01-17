"use client";

import ServicePreview from "@/components/ui/servicePreview";
import Heading from "../ui/heading";

const services = [
  {
    id: "barba",
    src: "/assets/images/services/barba.jpg",
    alt: "image",
    heading: "Cabelo e barba",
    duration: 30,
    price: "50",
  },
  {
    id: "coloracao",
    src: "/assets/images/services/coloracao.jpg",
    alt: "image",
    heading: "Coloração",
    duration: 60,
    price: "80",
  },
  {
    id: "corte-barba",
    src: "/assets/images/services/corte_barba.jpg",
    alt: "image",
    heading: "Corte + Barba",
    duration: 45,
    price: "70",
  },
  {
    id: "corte-barba",
    src: "/assets/images/services/corte_barba.jpg",
    alt: "image",
    heading: "Corte + Barba",
    duration: 45,
    price: "70",
  },
];

const SideBar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r">
      <div className="flex flex-col gap-3 h-full overflow-y-auto p-4">
        <Heading className="mb-1.5">Serviços</Heading>
          {services.map((service) => (
            <ServicePreview
              key={service.id}
              src={service.src}
              alt={service.alt}
              heading={service.heading}
              duration={service.duration}
              price={service.price}
              onClick={() => alert(`Selected ${service.id}`)}
            />
          ))}
        </div>
    </aside>
  );
};

export default SideBar;
