type BackgroundImageProps = {
  image: string;
  children: React.ReactNode;
};

const BackgroundSection = async ({ image, children }: BackgroundImageProps) => {
  return (
    <section
      className="flex items-center justify-center w-full min-h-screen bg-center bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="z-20">{children}</div>
    </section>
  );
};

export default BackgroundSection;
