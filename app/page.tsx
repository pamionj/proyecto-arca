import Image from 'next/image'
import Hero from './components/Hero'
import BlogPreview from "./components/BlogPreview"


export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* QUÉ ES ARCA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">
            ¿Qué es el Proyecto ARCA?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Proyecto ARCA es una iniciativa orientada a la creación de una
            comunidad autosustentable, basada en la colaboración, el respeto
            mutuo y la convivencia armónica con la naturaleza.
          </p>
        </div>
      </section>

      {/* SECCIÓN IMAGEN DESTACADA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-green-700 mb-6">
              Un espacio para vivir en equilibrio
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ARCA busca desarrollar un entorno donde las personas puedan vivir,
              aprender y colaborar de manera consciente, integrando prácticas
              sustentables y una gestión comunitaria responsable.
            </p>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/entorno.jpg"
              alt="Entorno natural del Proyecto ARCA"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-10 text-center">
            Vida y comunidad en ARCA
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              '/images/hero.jpg',
              '/images/comunidad-1.jpg',
              '/images/comunidad-2.jpg',
            ].map((src, i) => (
              <div
                key={i}
                className="relative h-64 rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Proyecto ARCA"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO EMBEBIDO */}
<section className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-semibold text-green-700 mb-8">
      Conoce el Proyecto ARCA
    </h2>

    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/iJ1WHEmA3sQ"
        title="Proyecto ARCA"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>

    <p className="mt-6 text-gray-600">
      Un vistazo al espíritu, visión y propósito detrás del Proyecto ARCA.
    </p>
  </div>
</section>


      {/* VALORES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-green-700 mb-10">
            Principios que nos guían
          </h2>

          <ul className="grid md:grid-cols-3 gap-6 text-gray-700">
            <li className="bg-white p-6 rounded-xl shadow-sm">
              Sustentabilidad
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm">
              Colaboración
            </li>
            <li className="bg-white p-6 rounded-xl shadow-sm">
              Respeto por la vida
            </li>
          </ul>
        </div>
      </section>

      {/* BLOG PREVIEW REAL */}
      <BlogPreview />
    </>
  )
}
