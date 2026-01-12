import Link from "next/link"

export default function CTA() {
  return (
    <section className="mt-20 border-t pt-10">
      <div className="bg-green-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          💚 ¿Te gustaría apoyar el Proyecto ARCA?
        </h3>

        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Con tu aporte ayudas a seguir desarrollando un espacio comunitario,
          sustentable y consciente, basado en la colaboración y el respeto
          por la vida.
        </p>

        <Link
          href="/donar"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-full font-medium hover:bg-green-800 transition"
        >
          Apoyar el proyecto
        </Link>
      </div>
    </section>
  )
}
