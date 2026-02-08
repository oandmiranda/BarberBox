import Image from "next/image";
import Heading from "../ui/heading";

const GridImagesSection = () => {
const baseImageStyles = `object-cover rounded-lg transition-transform duration-700 ease-out hover:scale-110`;
  return (
    <section className="flex flex-col gap-2">
      <Heading className="font-subtitle">Nossa galeria</Heading>

      <div className="grid grid-cols-6 gap-3">
        <div className="col-span-2 relative h-80 overflow-hidden">
          <Image
            src="/assets/images/services/barba.jpg"
            alt=""
            fill
            className={baseImageStyles}
          />
        </div>

        <div className="col-span-2 relative h-80 overflow-hidden">
          <Image
            src="/assets/images/services/eyebrow.jpg"
            alt=""
            fill
            className={baseImageStyles}
          />
        </div>

        <div className="col-span-1 relative h-80 overflow-hidden">
          <Image
            src="/assets/images/services/corte_masculino.jpg"
            alt=""
            fill
            className={baseImageStyles}
          />
        </div>

        <div className="col-span-1 relative h-80 overflow-hidden">
          <Image
            src="/assets/images/services/progressiva.jpg"
            alt=""
            fill
            className={baseImageStyles}
          />
        </div>

        {/* second row */}
        <div className="col-span-2 flex flex-col gap-3 ">
          <div className="col-span-2 relative h-40 overflow-hidden">
            <Image
              src="/assets/images/services/corte_luzes.jpg"
              alt=""
              fill
              className={baseImageStyles}
            />
          </div>

          <div className="col-span-2 relative h-40 overflow-hidden">
            <Image
              src="/assets/images/services/corte_relaxamento_hidratacao.jpg"
              alt=""
              fill
              className={baseImageStyles}
            />
          </div>
        </div>

        <div className="col-span-2 relative h-80 overflow-hidden">
          <Image
            src="/assets/images/services/coloracao.jpg"
            alt=""
            fill
            className={baseImageStyles}
          />
        </div>

        <div className="col-span-1 flex flex-col gap-3 ">
          <div className="relative h-40 overflow-hidden">
            <Image
              fill
              className={baseImageStyles}
              src="/assets/images/services/corte_infantil.jpg"
              alt=""
            />
          </div>
          <div className="relative h-40 overflow-hidden">
            <Image
              fill
              className={baseImageStyles}
              src="/assets/images/services/corte_luzes.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-1 relative h-80 overflow-hidden">
          <Image
            src="/assets/images/services/corte_barba.jpg"
            alt=""
            fill
            className={baseImageStyles}
          />
        </div>
      </div>
    </section>
  );
};

export default GridImagesSection;
