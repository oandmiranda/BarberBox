import Image from "next/image";
import ContentWrapper from "../ui/contentWrapper";

const images = [
  {
    src: "/assets/images/barbers/lucas.jpg",
    alt: "Barba",
  },
  {
    src: "/assets/images/services/corte_masculino.jpg",
    alt: "Corte masculino",
  },
  {
    src: "/assets/images/services/eyebrow.jpg",
    alt: "Sobrancelha",
  },
];

const BarberImagesSection = () => {
  return (
    <ContentWrapper title="Barber section" titleSize="xl">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative p-1 bg-surface w-[300px] h-[320px] shrink-0 rounded-xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 640px) 128px,
                   (max-width: 1024px) 160px,
                   180px"
          />
        </div>
      ))}
    </ContentWrapper>
  );
};

export default BarberImagesSection;
