import Container from "@/components/ui/container";
import Header from "@/components/sections/header";
import HeroPanel from "@/components/sections/heroPanel";
import BarberImagesSection from "@/components/domain/barberImagesSection";
import SideBar from "@/components/sections/sideBar";
import GridImagesSection from "@/components/sections/gridImagesSection";
import ContentSection from "@/components/ui/contentSection";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <SideBar />
      <main className="ml-72">
        <Container>
          <Header
            imageBackground="assets/images/services/corte_masculino.jpg"
            title="Book your stay with Tripster"
            subtitle="1,480,086 rooms around the world are waiting for you!"
          />
          <HeroPanel />
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
            imageSrc="/assets/images/services/barba.jpg"
            imageAlt="imagem"
          />
          <GridImagesSection />
          <Footer />
        </Container>
      </main>

      {/* <Link href="/register/client">Criar conta</Link>
        <Link href={"/schedule/choose-service"}>Ver serviços</Link> */}
    </>
  );
}
