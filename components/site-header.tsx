/* eslint-disable next/no-img-element -- the creator avatar is a remote first-party asset */
import { Menu, Video } from 'lucide-react';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="DaniCodex, inicio">
          <img src="https://github.com/DaniCodex.png?size=96" alt="" />
          <span>Dani<span>Codex</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/cursos">Cursos</Link>
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/#sobre-mi">Sobre mí</Link>
        </nav>
        <a className="header-cta" href="https://www.youtube.com/@danicodex" target="_blank" rel="noreferrer">
          <Video size={18} aria-hidden="true" /> Canal
        </a>
        <details className="mobile-nav">
          <summary aria-label="Abrir menú"><Menu size={22} aria-hidden="true" /></summary>
          <nav aria-label="Navegación móvil">
            <Link href="/">Inicio</Link>
            <Link href="/cursos">Cursos</Link>
            <Link href="/#proyectos">Proyectos</Link>
            <Link href="/#sobre-mi">Sobre mí</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
