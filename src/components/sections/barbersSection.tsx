import Heading from "../ui/heading";
import VerticalContentSection from "../ui/verticalContentSection";

const barberDatas = [
  {
    src: "/assets/images/barbers/lucas.jpg",
    alt: "Barba",
    name: "Lucas Martins",
    about: "Especialista em cortes clássicos e barba estilizada.",
    experienceTime: "6 anos de experiência",
  },
  {
    src: "/assets/images/barbers/daniel.jpg",
    alt: "Corte masculino",
    name: "Daniel Silva",
    about: "Especialista em cortes clássicos, degradê e barba estilizada.",
    experienceTime: "4 anos de experiência",
  },
  {
    src: "/assets/images/barbers/guilherme.jpg",
    alt: "Corte masculino",
    name: "Guilherme Santos",
    about: "Especialista em cortes gerais, clássicos e design de barba ",
    experienceTime: "5 anos de experiência",
  },
  {
    src: "/assets/images/barbers/leonardo.jpg",
    alt: "Corte masculino",
    name: "Leonardo Almeida",
    about: "Especialista em cortes clássicos e barba estilizada.",
    experienceTime: "3 anos de experiência",
  },
];

const BarbersSection = () => {
  return (
    <section className="flex flex-col mx-auto w-full gap-2 flex-wrap">
      <Heading size="xl">Os melhores barbeiros a sua disposição</Heading>
      <div className="gap-y-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-4 sm:gap-y-7">
        {barberDatas.map((barber, index) => (
          <VerticalContentSection
            key={index}
            title={barber.name}
            subtitle={barber.about}
            details={barber.experienceTime}
            imageSrc={barber.src}
            imageAlt={barber.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default BarbersSection;
