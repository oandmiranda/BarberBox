import Button from "@/components/ui/button";
import ContentSection from "@/components/ui/contentSection";
import Heading from "@/components/ui/heading";
import Hero from "@/components/ui/hero";
import Text from "@/components/ui/text";

export default async function BeardTipsPage() {
  const imagesSize = "sm:w-[240px] h-[240px] md:w-[260px] md:h-[260px]";
  const baseStyle = "flex flex-col items-center gap-2"

  return (
    <section className="py-[100px] w-full min-w-0 flex flex-col items-center justify-center px-4 font-details">
      <div className="w-full md:w-[60%] mb-5 flex flex-col flex-wrap">
        <Hero
          imageBackground="/assets/images/barbershop/shaving_man.png"
          height="h-[400px]"
          title="Dicas para fazer a barba"
          subtitle="Tire suas dúvidas com essas super dicas de cuidados com a barba"
          hasTitleCenter={true}
          titleSize="xl"
        />
        <div className="flex flex-col font-body items-center justify-center gap-[100px] mt-8">
          <Text>
            Temos algumas dicas sobre como conseguir um barbear mais confortável
            e suave, seja você um iniciante ou um profissional. É simples:
            fazemos isso quase todo dia, e ainda assim é algo que inspira
            intermináveis debates.{" "}
            <strong>
              Então, assumimos o trabalho mental pesado em nome dos homens e
              voltamos com um simples guia em oito passos sobre o barbear.
            </strong>
          </Text>

          <ContentSection
            title="PASSO 1: Hidratar"
            subtitle="Primeiro, hidrate a pele para minimizar puxões, cortes e irritação enquanto estiver se barbeando. Recomendamos que você faça a barba assim que sair do banho ou até mesmo no chuveiro. A hidratação suaviza os pelos, permitindo que a lâmina deslize com mais facilidade. Use um esfoliante facial ou lave o rosto para remover a oleosidade, sujeira e pele morta, preparando sua pele para um barbear confortável."
            imageSrc="/assets/images/barbershop/washing_face.jpg"
            imageAlt="Barbeiro adulto jovem lavando o rosto"
            imageSizes={imagesSize}
          />

          <ContentSection
            title="PASSO 2: Aplique espuma de barbear"
            subtitle="Aplique um gel ou espuma de barbear - faça espuma e espalhe para ajudar a hidratar os pelos, melhorar o deslizamento da lâmina e ajudar a proteger contra irritação e a vermelhidão enquanto você faz a barba. Saiba mais aqui sobre por que você precisa de um creme de barbear e quais as diferenças entre gel e espuma de barbear."
            imageSrc="/assets/images/barbershop/shaving.jpg"
            imageAlt="Barbeiro atendendo cliente na barbearia"
            imageSizes={imagesSize}
          />

          <Text>
            <strong>Aplique um gel ou espuma de barbear</strong> - faça espuma e
            espalhe para ajudar a hidratar os pelos, melhorar o deslizamento da
            lâmina e ajudar a proteger contra irritação e a vermelhidão enquanto
            você faz a barba. Saiba mais aqui sobre por que você precisa de um
            creme de barbear e quais as diferenças entre gel e espuma de
            barbear.
          </Text>

          <div className={baseStyle}>
            <Heading>PASSO 3: Verifique se a lâmina está cega</Heading>
            <Text>
              Verifique as fitas de lubrificação, se estiverem apagadas ou
              gastas ou se as lâminas estiverem cegas, talvez seja hora de
              trocar por um novo refil.
            </Text>
          </div>

          <div className={baseStyle}>
            <Heading>PASSO 4: Faça gestos leves e suaves</Heading>
            <Text>
              Faça gestos leves, suaves, deixando a lâmina fazer o trabalho - a
              Gillette® Fusion5™ ProShield™ possui tecnologia Flexball que se
              adapta aos contornos do rosto.
            </Text>
          </div>

          <div className={baseStyle}>
            <Heading>PASSO 5: Enxágue suas lâminas frequentemente</Heading>
            <Text>
              Enxágue suas lâminas frequentemente. Lembre-se:{" "}
              <strong>
                não faça a barba sem creme de barbear ou passe a lâmina
                repetidas vezes no mesmo lugar
              </strong>
              , pois isso pode causar irritação. Bater o aparelho na pia pode
              danificar seriamente as peças fabricadas com precisão do seu
              aparelho de barbear.
            </Text>
          </div>

          <div className={baseStyle}>
            <Heading>
              PASSO 6: Fazer a barba no sentido do pelo e contra o pelo
            </Heading>

            <Text>
              Então, no sentido do pelo ou contra o pelo? A resposta é nos dois
              sentidos. O pelo facial cresce em muitas direções, por isso você
              vai ter de raspar tanto no sentido de crescimento quanto contra o
              crescimento em diversos momentos da sua rotina.{" "}
              <strong>Raspe na direção que achar mais confortável.</strong> Um
              aparelho com múltiplas lâminas como o ProShield irá ajudar a
              conseguir um barbear confortável mesmo contra o crescimento do
              pelo.
            </Text>
          </div>

          <div className={baseStyle}>
            <Heading>
              PASSO 7: Dê o acabamento com o aparador de precisão
            </Heading>
            <Text>
              Use o Aparador de Precisão na parte de trás de qualquer aparelho
              Fusion5™ para alcançar lugares difíceis como a área embaixo do
              nariz e para definir suas costeletas.
            </Text>
          </div>

          <ContentSection
            title="PASSO 8: Aplique hidratante ou loção pós-barba"
            subtitle="Lave o rosto com água fria e seque-o com tapinhas leves. Use uma
            loção pós-barba hidratante para acalmar e hidratar a pele."
            imageSrc="/assets/images/barbershop/shaving_cream.jpg"
            imageAlt="Barbeiro adulto jovem lavando o rosto"
            imageSizes={imagesSize}
          />

          <div className={baseStyle}>
            <Heading>Você acabou de dominar a arte de fazer a barba!</Heading>
            <Text>
              <strong>
                Que tal conhecer mais sobre produtos?! Temos algumas
                recomendações pra você conferir!
              </strong>
            </Text>
          </div>
          <Button variant="link" href="/recommendations">
            Conferir
          </Button>
        </div>
      </div>
    </section>
  );
}
