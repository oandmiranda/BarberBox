import BarberImagesSection from "@/components/sections/barbersSection";
import GridImagesSection from "@/components/sections/gridImagesSection";
import ContentSection from "@/components/ui/contentSection";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Container from "@/components/ui/container";
import Highlights from "@/components/sections/highlights";
import { Store } from "lucide-react";
import ServiceList from "@/components/sections/serviceList";

export default function HomePage() {
  return (
    <>
      <Header
        imageBackground="assets/images/barbershop/cover.png"
        title="Mais que um corte, uma experiência"
        subtitle="Cortes modernos e atendimento de qualidade em cada detalhe do seu visual"
      />
      <Container>
        <Highlights />
        <BarberImagesSection />
        <ServiceList />
        <ContentSection
          badge="Sobre nós"
          badgeIcon={Store}
          title="Nossa história"
          subtitle="Somos uma barbearia criada para quem valoriza cuidado, estilo e boa experiência. Mais do que cortes e barba, acreditamos em atendimento próximo, ambiente confortável e atenção aos detalhes. Ao longo dos anos, construímos nossa história com dedicação, técnica e respeito por cada cliente que passa pela nossa cadeira, sempre buscando evoluir sem perder nossa identidade."
          stats={[
            { value: "6+", subtitle: "Anos de experiência" },
            { value: "4.9 ★", subtitle: "Avaliação média" },
            { value: "3.000+", subtitle: "Clientes atendidos" },
          ]}
          imageSrc="/assets/images/barbers/barber1.png"
          imageAlt="Barbeiro atendendo cliente na barbearia"
        />
        <GridImagesSection />
        <ContentSection
          badge="Sobre nós"
          title="Por que nos escolher?"
          subtitle="Somos uma barbearia criada para quem valoriza cuidado, estilo e boa experiência. Mais do que cortes e barba, acreditamos em atendimento próximo, ambiente confortável e atenção aos detalhes. Ao longo dos anos, construímos nossa história com dedicação, técnica e respeito por cada cliente que passa pela nossa cadeira, sempre buscando evoluir sem perder nossa identidade."
          imageSrc="/assets/images/barbers/barber2.jpg"
          imageAlt="Barbeiro atendendo cliente na barbearia"
          imageLeft
        />
        <Footer />
      </Container>
    </>
  );
}
