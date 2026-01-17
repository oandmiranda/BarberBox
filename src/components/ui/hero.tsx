export type HeroProps = {
  imageBackground?: string
  title: string
  subtitle?: string
}

const Hero = ({ imageBackground, title, subtitle }: HeroProps) => {
  return (
    <section
      className="h-containerHeight flex items-center justify-center rounded-md"
      style={imageBackground ? { backgroundImage: `url(${imageBackground})` } : undefined}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}

export default Hero