import Link from "next/link"

export default function DonarPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      {/* HERO / PROPÓSITO */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          Tu apoyo hace posible el Proyecto ARCA
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Proyecto ARCA nace con el propósito de construir una comunidad
          consciente, sustentable y humana. Cada aporte —grande o pequeño— nos
          permite avanzar con responsabilidad, cuidado del entorno y
          transparencia.
        </p>
      </section>

      {/* IMPACTO */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🌱 Territorio
          </h3>
          <p className="text-gray-700 text-sm">
            Conservación y mejora del entorno natural donde se desarrolla ARCA.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🏡 Comunidad
          </h3>
          <p className="text-gray-700 text-sm">
            Infraestructura básica para la vida comunitaria y el aprendizaje.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm text-center">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🤝 Gestión
          </h3>
          <p className="text-gray-700 text-sm">
            Organización, planificación y desarrollo responsable del proyecto.
          </p>
        </div>
      </section>

      {/* USO DE APORTES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          ¿En qué se utilizarán los aportes?
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Los recursos recibidos serán destinados al desarrollo inicial del
          proyecto: preparación del terreno, materiales, herramientas, logística
          y gestión comunitaria. El crecimiento de ARCA se realizará de manera
          gradual, consciente y acorde a los valores que promovemos.
        </p>
      </section>

      {/* TRANSPARENCIA */}
      <section className="bg-green-50 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Transparencia y compromiso
        </h2>

        <p className="text-gray-700 leading-relaxed">
          ARCA es un proyecto en construcción. Los aportes serán utilizados de
          forma responsable y documentada. Los avances y hitos relevantes serán
          compartidos a través de este sitio y nuestros canales de comunicación.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          ¿Quieres apoyar el Proyecto ARCA?
        </h2>

        <p className="text-gray-700 mb-6">
          Actualmente estamos habilitando los métodos de donación. Muy pronto
          podrás apoyar de forma directa y segura.
        </p>

        <a
        href="https://wa.me/56998199978"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition"
        >
  Quiero apoyar / Contactar
      </a>

      </section>

      {/* VOLVER */}
      <div className="mt-16 text-center">
        <Link
          href="/"
          className="text-green-600 font-medium hover:underline"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  )
}
