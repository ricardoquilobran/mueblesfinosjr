import { useState } from "react";


function Header() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header">

      <div className="container">

        <a href="#inicio" className="logo-link">
          <img
            src="/img/logo.png"
            alt="Muebles Finos JR"
            className="logo-img"
          />

          <div className="logo-texto">
            <h1>Muebles Finos JR</h1>
            <span>Fabricación ◆ Restauración ◆ Retapizado</span>
          </div>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          ☰
        </button>

        <nav className={menuAbierto ? "nav activo" : "nav"}>

          <ul className="menu">

            <li><a href="#inicio">Inicio</a></li>

            <li><a href="#nosotros">Nosotros</a></li>

            <li><a href="#servicios">Servicios</a></li>

            <li><a href="#galeria">Galería</a></li>

            <li><a href="#contacto">Contacto</a></li>

          </ul>

        </nav>

      </div>

    </header>
  );
}

export default Header;