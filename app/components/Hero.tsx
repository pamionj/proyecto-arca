import Image from 'next/image'
import Link from "next/link"


export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[480px] md:h-[80vh] md:min-h-[520px]">
      {/* Imagen de fondo */}
      <Image
        src="/images/hero.jpg"
        alt="Entorno natural del Proyecto ARCA"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 h-full flex flex-col justify-center text-white text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">

          Proyecto ARCA
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Comunidad sustentable orientada a la autosuficiencia, la colaboración
          y el respeto por la vida y el entorno natural.
        </p>

        <div className="flex justify-center">

        <Link
        href="/donar"
        className="inline-block mt-6 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"

        >
        Apoyar el Proyecto ARCA
        </Link>

        </div>
      </div>
    </section>
  )
}
