import Image from "next/image";
import Heading from "../ui/heading";

const GridImagesSection = () => {
  return (
    <section className="flex flex-col">
      <Heading className="font-subtitle">Nossa galeria</Heading>

      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-2 relative h-80">
          <Image
            src="/assets/images/services/barba.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="col-span-2 relative h-80">
          <Image
            src="/assets/images/services/eyebrow.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="col-span-1 relative h-80">
          <Image
            src="/assets/images/services/corte_masculino.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="col-span-1 relative h-80">
          <Image
            src="/assets/images/services/progressiva.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* second row */}
        <div className="col-span-2 flex flex-col gap-3">
          <div className="col-span-2 relative h-40">
            <Image
              src="/assets/images/services/corte_luzes.jpg"
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="col-span-2 relative h-40">
            <Image
              src="/assets/images/services/corte_relaxamento_hidratacao.jpg"
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="col-span-2 relative h-80">
          <Image
            src="/assets/images/services/coloracao.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="col-span-1 flex flex-col gap-3">
          <div className="relative h-40">
            <Image
              fill
              className="object-cover rounded-lg"
              src="/assets/images/services/corte_infantil.jpg"
              alt=""
            />
          </div>
          <div className="relative h-40">
            <Image
              fill
              className="object-cover rounded-lg"
              src="/assets/images/services/corte_luzes.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-1 relative h-80">
          <Image
            src="/assets/images/services/corte_barba.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GridImagesSection;
