import Image from "next/image";

type BackgroundImageProps = {
  image: string;
  children: React.ReactNode;
};

const BackgroundSection = ({ image, children }: BackgroundImageProps) => {
  return (
    <section className="relative flex items-center justify-center py-10 px-2 w-full min-h-screen text-white overflow-hidden">

      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative z-20">
        {children}
      </div>

    </section>
  );
};

export default BackgroundSection;