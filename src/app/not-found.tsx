import BackgroundSection from "@/components/ui/backgroundSection";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";

export default function NotFound() {
  return (
    <BackgroundSection image="/assets/images/not-found.png">
      <div className="bg-black/40 p-6 flex flex-col gap-4 items-center rounded-lg">
        <Heading>{`Ops. Página não encontrada :(`}</Heading>
        <Button variant="link" href="/home" widthFull>Ir para página inicial</Button>
      </div>
    </BackgroundSection>
  );
}