import ContentSection from "../ui/contentSection";
import Heading from "../ui/heading";
import Hero from "../ui/hero";

const Highlights = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <Heading className="font-subtitle">Destaques</Heading>
      <div className="flex items-center gap-4 w-full mb-5">
        <Hero
          imageBackground="assets/images/barbershop/cover.png"
          title="Conheça nossos serviços premium"
          subtitle="serviços premium de qualidade altissima"
          buttonLabel="Conhecer"
          link="#"
        />
        <Hero
          imageBackground="assets/images/barbershop/cover.png"
          title="Conheça nossos serviços premium"
          subtitle="serviços premium de qualidade altissima"
          buttonLabel="Conhecer"
          link="#"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ContentSection
          title="Cabelo + Barba"
          titleSize="lg"
          subtitle="Um serviço de corte de cabelo pensado para quem busca estilo, conforto e precisão."
          subtitleSize="sm"
          imageSrc="/assets/images/services/corte_masculino.jpg"
          imageAlt="homem cortando o cabelo"
          imageSizes="w-[160px] h-[160px]"
          imageLeft
          hasButton
        />
        <ContentSection
          title="Cabelo + Barba"
          titleSize="lg"
          subtitle="Um serviço de corte de cabelo pensado para quem busca estilo, conforto e precisão."
          subtitleSize="sm"
          imageSrc="/assets/images/services/corte_masculino.jpg"
          imageAlt="homem cortando o cabelo"
          imageSizes="w-[160px] h-[160px]"
          imageLeft
          hasButton
        />
        <ContentSection
          title="Cabelo + Barba"
          titleSize="lg"
          subtitle="Um serviço de corte de cabelo pensado para quem busca estilo, conforto e precisão."
          subtitleSize="sm"
          imageSrc="/assets/images/services/corte_masculino.jpg"
          imageAlt="homem cortando o cabelo"
          imageSizes="w-[160px] h-[160px]"
          imageLeft
          hasButton
        />
        <ContentSection
          title="Cabelo + Barba"
          titleSize="lg"
          subtitle="Um serviço de corte de cabelo pensado para quem busca estilo, conforto e precisão."
          subtitleSize="sm"
          imageSrc="/assets/images/services/corte_masculino.jpg"
          imageAlt="homem cortando o cabelo"
          imageSizes="w-[160px] h-[160px]"
          imageLeft
          hasButton
        />
      </div>
    </section>
  );
};

export default Highlights;
