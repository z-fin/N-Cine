import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import logo from '../../assets/logo.jpg';
import './common.css';

interface PageLayoutProps {
  children: ReactNode;
}

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { to: '/funciones', label: 'Funciones' },
  { to: '/noticias', label: 'Noticias' },
  { to: '/apoyar', label: 'Apoyar' },
];

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="Nuestro Ciclo inicio">
          <img src={logo} alt="" />
          <span>Nuestro Ciclo</span>
        </NavLink>

        <nav className="site-nav" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Button href="/funciones" variant="primary" accent="yellow">
          Reservar
        </Button>
      </header>

      <main className="site-main">{children}</main>

      <footer className="site-footer">
        <div>
          <span className="footer-brand">Nuestro Ciclo</span>
          <p>Cine queer, archivo vivo y encuentro comunitario.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:hola@nuestrociclo.org">Contacto</a>
          <a href="/noticias">Newsletter</a>
          <a href="/apoyar">Apoyar</a>
        </div>
      </footer>
    </div>
  );
}
