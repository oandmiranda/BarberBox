import BarberImagesSection from "@/components/sections/barbersSection";
import GridImagesSection from "@/components/sections/gridImagesSection";
import ContentSection from "@/components/ui/contentSection";
import Header from "@/components/sections/header";
import Container from "@/components/ui/container";
import Highlights from "@/components/sections/highlights";
import { Store } from "lucide-react";
import ServiceList from "@/components/sections/serviceList";

export default function HomePage() {
  return (
    <>
      <Header
        imageBackground="/assets/images/barbershop/cover.png"
        title={
          <>
            Mais que um corte,{" "}
            <span className="text-secondary">uma experiência.</span>
          </>
        }
        subtitle="Cortes modernos e atendimento de qualidade em cada detalhe do seu visual"
      />
      <Container>
        <Highlights />
        <BarberImagesSection />
        <ServiceList />
          <ContentSection
            id="about_us"
            badge="Sobre nós"
            titleSize="xl"
            badgeIcon={Store}
            title="Nossa história"
            subtitle={
              <>
                Somos uma barbearia criada para quem valoriza cuidado, estilo e boa experiência. Mais do que cortes e barba, acreditamos em atendimento próximo, ambiente confortável e atenção aos detalhes. Ao longo dos anos, construímos nossa história com <strong>dedicação, técnica e respeito por cada cliente</strong> que passa pela nossa cadeira, sempre buscando evoluir sem perder nossa identidade.
              </>
            }
            stats={[
              { value: "7+", subtitle: "Anos de experiência" },
              { value: "4.9 ★", subtitle: "Avaliação média" },
              { value: "3.000+", subtitle: "Clientes atendidos" },
            ]}
            imageSrc="/assets/images/barbershop/barbershop2.png"
            imageAlt="Barbearia por dentro"
            className="scroll-mt-[200px]"
          />

        <GridImagesSection />
        <ContentSection
          badge="Sobre nós"
          title="Por que nos escolher?"
          titleSize="xl"
          subtitle={
            <>
              <strong>Equipe qualificada, atendimento pontual e atenção real aos detalhes</strong>. Trabalhamos para entender seu estilo e entregar um resultado consistente em todas as visitas, mantendo corte e barba sempre alinhados. Mais do que um serviço rápido, você encontra um cuidado contínuo com sua imagem e uma experiência confortável do início ao fim.
            </>
          }
          imageSrc="/assets/images/barbershop/barbershop3.jpg"
          imageAlt="Barbeiro atendendo cliente na barbearia"
          imageLeft
        />
      </Container>
    </>
  );
}
