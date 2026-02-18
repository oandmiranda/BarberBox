import { Lightbulb, Sparkle } from "lucide-react";
import ContentSection from "../ui/contentSection";
import Heading from "../ui/heading";
import Hero from "../ui/hero";

const Highlights = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <Heading size="xl">Destaques</Heading>
      <div className="flex flex-col items-center gap-4 w-full mb-5 sm:flex-col md:flex-row">
        <Hero
          imageBackground="/assets/images/services/hero2.jpg"
          title="Agende seu horário com a gente"
          subtitle="Diversos serviços disponíveis para agendamento"
          buttonLabel="Ver Serviços"
          link="#services"
        />
        <Hero
          imageBackground="/assets/images/services/hero1.jpg"
          title="Conheça nossos serviços premium"
          subtitle="Experiências com o mais alto nível de qualidade"
          buttonLabel="Conhecer"
          link="/premium_services"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6 mt-3">
        <ContentSection
          badge="Dicas"
          badgeIcon={Sparkle}
          title="Como fazer a barba corretamente?"
          titleSize="base"
          subtitle="Conheça dicas sobre como fazer e manter sua barba da maneira correta."
          subtitleSize="sm"
          imageSrc="/assets/images/barbershop/highlight4.jpg"
          imageAlt="homem cortando o cabelo"
          imageSizes="w-[160px] h-[160px] lg:w-[180px] lg:h-[180px]"
          imageLeft={true}
          hasButton={true}
          href="/beard_tips"
        
        />
        <ContentSection
          badge="Recomendações"
          badgeIcon={Lightbulb}
          title="Produtos para sua barba"
          titleSize="base"
          subtitle="As melhores recomendações de produtos para você manter os cuidados com a saúde e estética da sua barba.
          "
          subtitleSize="sm"
          imageSrc="/assets/images/barbershop/highlight3.jpg"
          imageAlt="homem cortando o cabelo"
          imageSizes="w-[160px] h-[160px] lg:w-[180px] lg:h-[180px]"
          imageLeft={true}
          hasButton={true}
          href="/recommendations"
        />
      </div>
    </section>
  );
};

export default Highlights;
