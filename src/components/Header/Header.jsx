
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { assetPath } from "../../utils/assetPath";

import "./Header.css";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo-link" onClick={cerrarMenu}>
          <img
            src={assetPath("/images-webp/logo/logo.webp")}
            alt="Muebles Finos JR"
            className="logo-img"
          />

          <div className="logo-texto">
            <h1>Muebles Finos JR</h1>
            <span>Venta ◆ Restauración ◆ Retapizado</span>
          </div>
        </NavLink>

        <button
          type="button"
          className={menuAbierto ? "menu-btn activo" : "menu-btn"}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuAbierto ? "nav activo" : "nav"}>
          <ul className="menu">
            <li><NavLink to="/" onClick={cerrarMenu}>Inicio</NavLink></li>
            <li><NavLink to="/restauracion" onClick={cerrarMenu}>Restauración</NavLink></li>
            <li><NavLink to="/retapizado" onClick={cerrarMenu}>Retapizado</NavLink></li>
            <li><NavLink to="/muebles-de-estilo" onClick={cerrarMenu}>Muebles de Estilo</NavLink></li>
            <li><NavLink to="/galeria" onClick={cerrarMenu}>Galería</NavLink></li>
            <li><NavLink to="/nosotros" onClick={cerrarMenu}>Nosotros</NavLink></li>
            <li><NavLink to="/contacto" onClick={cerrarMenu}>Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
