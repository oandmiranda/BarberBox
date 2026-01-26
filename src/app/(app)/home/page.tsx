import BarberImagesSection from "@/components/domain/barberImagesSection";
import GridImagesSection from "@/components/sections/gridImagesSection";
import ContentSection from "@/components/ui/contentSection";
import Footer from "@/components/sections/footer";
import Hero from "@/components/ui/hero";

export default function HomePage() {
  return (
    <>
      <Hero
        imageBackground="assets/images/barbershop/barbershop.png"
        title="Book your stay with Tripster"
        subtitle="1,480,086 rooms around the world are waiting for you!"
      />
      <BarberImagesSection />
      <ContentSection
        badge="Sobre nós"
        title="Nossa história"
        description="Somos uma barbearia criada para quem valoriza cuidado, estilo e boa experiência. Mais do que cortes e barba, acreditamos em atendimento próximo, ambiente confortável e atenção aos detalhes. Ao longo dos anos, construímos nossa história com dedicação, técnica e respeito por cada cliente que passa pela nossa cadeira, sempre buscando evoluir sem perder nossa identidade."
        stats={[
          { value: "6+", subtitle: "Anos de experiência" },
          { value: "4.9★", subtitle: "Avaliação média" },
          { value: "3.000+", subtitle: "Clientes atendidos" },
        ]}
        imageSrc="/assets/images/barbers/barber1.png"
        imageAlt="Barbeiro atendendo cliente na barbearia"
      />
      <GridImagesSection />
      <ContentSection
        badge="Sobre nós"
        title="Por que nos escolher?"
        description="Somos uma barbearia criada para quem valoriza cuidado, estilo e boa experiência. Mais do que cortes e barba, acreditamos em atendimento próximo, ambiente confortável e atenção aos detalhes. Ao longo dos anos, construímos nossa história com dedicação, técnica e respeito por cada cliente que passa pela nossa cadeira, sempre buscando evoluir sem perder nossa identidade."
        imageSrc="/assets/images/barbers/barber2.jpg"
        imageAlt="Barbeiro atendendo cliente na barbearia"
        imageLeft
      />
      <Footer />
    </>
  );
}
