import Button from "../ui/button";

const HeroPanel = () => {
  return (
    <div className="flex mx-auto bg-surface p-1 rounded-full gap-1">
      <div className="">
        <Button variant="link" href="/">
          Ver Serviços
        </Button>
      </div>
      <div className="">
        <Button variant="link" href="/">
          Agendamentos
        </Button>
      </div>
    </div>
  );
};

export default HeroPanel;
