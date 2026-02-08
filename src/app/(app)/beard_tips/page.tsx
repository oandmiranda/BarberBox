import Heading from "@/components/ui/heading";
import Hero from "@/components/ui/hero";
import Text from "@/components/ui/text";
import Image from "next/image";

const styledTitle = `border-b-2 border-secondary pb-2`;

export default async function BeardTipsPage() {
  return (
    <section className="py-[125px] flex flex-col items-center justify-center font-details">
      <div className="w-[60%] mb-5">
        <Hero
          imageBackground="/assets/images/barbershop/barbershop4.png"
          title="Guia de pós-barba: o toque final para uma barba saudável"
          subtitle="Confira nossas dicas de como cuidar da sua barba para fazê-la crescer mais cheia e saudável"
          hasTitleCenter
        />
        <div className="flex flex-col items-center justify-center gap-6 mt-8">
          <Text>
            Fazer a barba é uma daquelas tarefas que ou você ama ou odeia. Mas,
            se você quer uma barba bonita, cheia e saudável, não adianta fugir:
            um dos grandes segredos é usar um bom produto de pós-barba para pele
            sensível.
          </Text>

          <Text>
            Mas você sabe como escolher a melhor opção para a sua barba e a sua
            necessidade? Acredite: isso faz toda a diferença no resultado final
            para você ter aquela barba cheia e saudável. Mas pode ficar
            tranquilo! <strong>Neste guia de pós-barba você vai encontrar informações
            sobre os produtos</strong> e como escolher a melhor opção para você. Confira!
          </Text>

          <Heading className={styledTitle}>Quais são os tipos de loção pós-barba?</Heading>

          <Text>
            Antes de escolher qual o seu produto ideal, você conhece os
            diferentes produtos pós-barba? Isso faz toda a diferença no
            resultado final, por isso, a primeira coisa é entender quais são os
            tipos de pós-barba.
          </Text>
          <Heading>Balm Pós-barba</Heading>
          <div className="relative w-[650px] h-[450px]">
            <Image
              src={"/assets/images/products/product1.jpg"}
              alt="imagem de um balm para barba"
              fill
            />
          </div>
          <Text>
            <strong>O balm pós-barba</strong>, como o Balm Pós-Barba Homem,
            <strong> tem uma consistência mais cremosa e firme</strong>, ideal
            para homens que sofrem com irritação e sensibilidade na pele após o
            barbear.
          </Text>
          <Text>
            E por ser mais densa, ajuda na hidratação da pele, reduzindo a
            vermelhidão e proporcionando hidratação profunda. Além disso, os
            balms possuem <strong>propriedades antissépticas</strong> que deixam
            a pele mais protegida e garantem uma cicatrização mais rápida.
          </Text>
          <Heading>Gel Pós-barba</Heading>
          <div className="relative w-[650px] h-[450px]">
            <Image
              src={"/assets/images/products/product2.jpg"}
              alt="imagem de um balm para barba"
              fill
            />
          </div>
          <Text>
            O gel pós-barba é uma boa escolha para aqueles que preferem uma
            <strong>sensação mais refrescante</strong> após o barbear e não gostam da sensação
            hidratante, como o Gel Pós-barba Sr N. <strong>A sua textura leve e não
            oleosa é rapidamente absorvida pela pele</strong>, proporcionando alívio
            imediato contra a irritação. Os géis também contêm ingredientes que
            ajudam a acalmar a pele, deixando uma sensação de frescor, mas sem
            abrir mão de uma hidratação mais leve.
          </Text>
          <Heading className={styledTitle}>Óleo Para Barba</Heading>
          <Text>
            O óleo pós-barba é uma opção principalmente para quem gosta de
            cuidar dos fios da barba. <strong>Este produto ajuda a criar uma película de
            proteção nos fios</strong>, mantendo a barba hidratada e alinhada a longo
            prazo.
          </Text>
          <Text>
            Essa hidratação previne coceira, descamação, pelos encravados, além
            de condicionar a barba, tornando os fios mais macios e fáceis de
            modelar.
          </Text>
          <Text>
            O óleo para barba frequentemente contém uma mistura natural, como
            jojoba e argan, que nutrem profundamente os fios.
          </Text>
          <Heading className={styledTitle}>Spray Pós-barba</Heading>
          <Text>
            <strong>O mais prático de todos, o spray pós-barba</strong> é fácil de aplicar, sendo
            uma ótima opção para quem busca conveniência sem abrir mão dos
            cuidados com a pele.
          </Text>
          <Text>
            Ele é especialmente útil para acalmar a pele imediatamente após o
            barbear, graças à sua aplicação uniforme e rápida absorção. Também é
            ideal para o dia a dia, já que não deixa a pele oleosa.
          </Text>
          <Text>
            Muitos sprays são formulados com ingredientes calmantes e anti
            sépticos que ajudam a prevenir irritações e infecções em pequenos
            cortes.
          </Text>
          <Heading className={styledTitle}>Para que servem os produtos pós-barba?</Heading>
          <Text>
            <strong>
              Os produtos pós-barba têm como principal função acalmar e hidratar
              a pele,
            </strong>
            proporcionando alívio imediato e prevenindo desconfortos comuns como
            ardor, coceira e pequenos cortes que surgem na hora de barbear. Mas
            será que os produtos pós-barba fazem tanta diferença assim? Bom,
            quem tem o costume de cuidar bem da barba sabe que eles podem
            transformar a saúde da sua pele e a aparência dos fios. Í
          </Text>
          <Text>
            <strong>
              Os produtos pós-barba fazem parte de uma rotina de autocuidado
              masculino.
            </strong>
            O ato de barbear remove não apenas os pelos indesejados, mas também
            uma camada superficial da pele, deixando-a vulnerável a irritações,
            vermelhidão e infecções.
          </Text>
          <Text>
            A longo prazo, todo esse cuidado tem um resultado: uma barba mais
            bonita e encorpada, além de uma pele macia e sem pelos encravados.
          </Text>
          <Heading className={styledTitle}>Como acalmar a pele pós-barba?</Heading>
          <Text>
            Se você sofre com irritação na pele depois de fazer a barba, o
            primeiro passo é: enxágue bem o rosto com água fria para fechar os
            poros e reduzir a irritação.
          </Text>
          <Text>
            Em seguida, aplique um produto pós-barba adequado ao seu tipo de
            pele, como um balm ou gel com ingredientes calmantes. Finalize
            hidratando a pele com uma loção leve.
          </Text>
          <Text>
            <strong>Atenção:</strong>Atenção: evite produtos com álcool, pois
            podem ressecar e irritar ainda mais a pele.
          </Text>
          <Heading className={styledTitle}>Como fazer para manter a barba saudável?</Heading>
          <Text>
            Uma barba saudável cresce mais bonita e alinhada, além de muito mais
            rápido. Também diminui os pelos encravados e ajuda a preencher os
            locais mais falhados. Mas, para tudo isso, é preciso ter uma rotina
            de autocuidado com o rosto.
          </Text>
          <Text>
            Mas não precisa se preocupar:
            <strong>
              3 passos simples e rápidos já fazem muita diferença!
            </strong>
          </Text>
          <Heading className={styledTitle}>Faça a limpeza diária da barba</Heading>
          <Text>
            <strong>
              Manter a barba limpa é o primeiro passo - e primordial
            </strong>
            . Lave a barba diariamente com um sabonete facial ou shampoo para
            barba. Massageie para remover sujeira e resíduos acumulados ao longo
            do dia. Enxágue bem e seque a barba com uma toalha limpa.
          </Text>
          <Heading className={styledTitle}>Mantenha o rosto hidratado</Heading>
          <Text>
            Como vimos,
            <strong>
              o hidratante é um aliado na hora de cuidar da barba.
            </strong>
            Isso evita coceira, descamação, irritação, pelos encravados e muito
            mais. Use um óleo ou balm pós-barba. Aplique o produto diariamente,
            de manhã e antes de dormir.
          </Text>
          <Heading className={styledTitle}>Não esqueça de pentear os pelos da barba</Heading>
          <Text>
            Um cuidado simples, mas que muitos homens deixam de lado:
            <strong>pentear a barba regularmente</strong> ajuda a desembaraçar
            os fios, distribuir os óleos naturais e promover um crescimento
            saudável.
          </Text>
          <Text>
            Por isso, pentear a barba também ajuda a manter a barba alinhada e
            facilita a aplicação de produtos como os de pós-barba.
          </Text>
          <Text>
            O que achou deste guia de pós-barba? Ah, e não deixe de conferir
            nossas recomendações de produtos e cuidados masculinos para colocar
            em prática nossas dicas na sua rotina!
          </Text>
        </div>
      </div>
    </section>
  );
}
