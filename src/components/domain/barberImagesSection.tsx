import Image from "next/image";
import ContentWrapper from "../ui/contentWrapper";

// skdjfjkdfksjdfkd
const BarberImagesSection = () => {
  return (
    <ContentWrapper title="Barber section">
      <div className="p-1 bg-surface rounded-xl">
        <Image
          src={"/assets/images/services/barba.jpg"}
          alt="image"
          className="rounded-xl"
          width={250}
          height={250}
        />
      </div>
      <div className="p-1 bg-surface rounded-xl">
        <Image
          src={"/assets/images/services/corte_masculino.jpg"}
          alt=""
          className="rounded-xl"
          width={250}
          height={250}
        />
      </div>
      <div className="p-1 bg-surface rounded-xl">
        <Image
          src={"/assets/images/services/eyebrow.png"}
          alt=""
          className="rounded-xl"
          width={250}
          height={250}
        />
      </div>
    </ContentWrapper>
  );
};

export default BarberImagesSection;
