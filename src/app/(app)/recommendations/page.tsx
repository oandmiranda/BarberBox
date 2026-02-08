
import Hero from "@/components/ui/hero";

export default async function RecommendationsPage() {
  return (
    <section className="py-[125px] flex flex-col items-center justify-center">
      <div className="w-[70%] mb-5">
        <Hero imageBackground="/assets/images/barbershop/barbershop4.png" title="Serviços prêmium para você" subtitle="Os melhores serviços disponíveis para você e para toda sua família" hasTitleCenter />
      </div>

    </section>
  );
}
