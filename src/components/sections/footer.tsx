import Heading from "../ui/heading";
import Text from "../ui/text";

const Footer = () => {
  return (
    <section className="flex flex-col w-full gap-4">
      <div className="flex justify-between items-center">
        <Text>Logo</Text>
        <Text>subtitle</Text>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <Heading>Empresa</Heading>
            <Text>Sobre nós</Text>
            <Text>Serviços</Text>
            <Text>Agendamentos</Text>
            <Text>Barbeiros</Text>
          </div>

          <div className="flex flex-col">
            <Heading>Contato</Heading>
            <Text>e-mail</Text>
            <Text>Telefone</Text>
            <Text>Localização</Text>
          </div>
        </div>

        <div>
					<Text>Redes sociais</Text>
				</div>
      </div>
    </section>
  );
};

export default Footer;
