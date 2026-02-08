import { Lightbulb, Sparkle } from "lucide-react";
import ContentSection from "../ui/contentSection";
import Heading from "../ui/heading";
import Hero from "../ui/hero";

const Highlights = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <Heading>Destaques</Heading>
      <div className="flex items-center gap-4 w-full mb-5">
        <Hero
          imageBackground="/assets/images/services/hero1.jpg"
          title="Conheça nossos serviços premium"
          subtitle="serviços premium de qualidade altissima"
          buttonLabel="Conhecer"
          link="/premium_services"
        />
        <Hero
          imageBackground="/assets/images/services/hero2.jpg"
          title="Atendimento que faz a diferença"
          subtitle="Mais que um corte, uma experiência completa de cuidado e estilo"
          buttonLabel="Conhecer"
          link="/about"
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-3">
        <ContentSection
          badge="Recomendações"
          badgeIcon={Sparkle}
          title="Produtos profissionais"
          titleSize="lg"
          subtitle=" Conheça recomendações de produtos para você garantir os melhores resultados na sua barba e cabelo pós corte."
          subtitleSize="sm"
          imageSrc="/assets/images/barbershop/highlight3.jpg"
          imageAlt="homem cortando o cabelo"
          imageSizes="w-[160px] h-[160px]"
          imageLeft={true}
          hasButton={true}
          href="/recommendations"
        />
        <ContentSection
          badge="Dica"
          badgeIcon={Lightbulb}
          title="Como manter a barba alinhada por mais tempo?"
          titleSize="lg"
          subtitle="Veja dicas super úteis de como manter sua barba saudável e de respeito."
          subtitleSize="sm"
          imageSrc="/assets/images/barbershop/highlight4.jpg"
          imageAlt="homem cortando o cabelo"
          imageSizes="w-[160px] h-[160px]"
          imageLeft={true}
          hasButton={true}
          href="/beard_tips"
        />
      </div>
    </section>
  );
};

export default Highlights;
