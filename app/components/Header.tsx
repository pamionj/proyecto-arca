import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <span className="font-bold text-lg text-green-700">
          Proyecto ARCA
        </span>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-green-700">
            Inicio
          </Link>
          <Link href="/blog" className="hover:text-green-700">
            Blog
          </Link>
          <Link
            href="/donar"
            className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition"
          >
            Apoyar
          </Link>
        </nav>
      </div>
    </header>
  )
}
