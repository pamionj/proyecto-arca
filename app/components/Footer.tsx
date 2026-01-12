import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">
        
        {/* COLUMNA 1 — IDENTIDAD */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Proyecto ARCA
          </h3>
          <p className="text-sm leading-relaxed text-green-200">
            Iniciativa comunitaria orientada a la creación de una comunidad
            autosustentable, basada en la colaboración, el respeto por la vida
            y la convivencia armónica con la naturaleza.
          </p>
        </div>

        {/* COLUMNA 2 — NAVEGACIÓN */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/donar" className="hover:underline">
                Donaciones
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3 — CONTACTO */}
        <div>
          <h4 className="text-lg font-semibold mb-4">
            Contacto
          </h4>
          <ul className="space-y-2 text-sm text-green-200">
            <li>
              📧 contacto@proyectoarca.cl
            </li>
            <li>
              🌱 Chile
            </li>
          </ul>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="border-t border-green-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-green-300 flex flex-col md:flex-row justify-between gap-4">
          <span>
            © {new Date().getFullYear()} Proyecto ARCA. Todos los derechos reservados.
          </span>
          <span>
            Sitio en desarrollo comunitario
          </span>
        </div>
      </div>
    </footer>
  )
}
