'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="font-bold text-xl text-green-700"
        >
          ARCA
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-green-700">
            Inicio
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-green-700">
            Blog
          </Link>
          <Link href="/donar" className="text-gray-700 hover:text-green-700">
            Donar
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Inicio
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="text-gray-700"
            >
              Blog
            </Link>
            <Link
              href="/donar"
              onClick={() => setOpen(false)}
              className="text-green-700 font-semibold"
            >
              Donar
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
