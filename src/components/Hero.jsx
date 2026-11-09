function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.68),rgba(0,0,0,.68)), url('/img/portada.jpg')",
      }}
    >
      <div className="hero-content">

        <img
          src="/img/logo.png"
          alt="Muebles Finos JR"
          className="hero-logo"
        />

        <div className="hero-tradicion">
          <span></span>
          <p>Más de 40 años de tradición</p>
          <span></span>
        </div>

        <h1>
          Muebles que
          <br />
          cuentan historias
        </h1>

        <div className="hero-servicios">
          <span>Fabricación</span>

          <div className="rombo"></div>

          <span>Restauración</span>

          <div className="rombo"></div>

          <span>Retapizado</span>
        </div>

        <p className="hero-texto">
          Más de cuatro décadas dedicados a la fabricación,
          restauración y retapizado de muebles finos.
          Conservamos la tradición del trabajo artesanal,
          respetando la nobleza de la madera y cuidando cada
          detalle para entregar piezas únicas y duraderas.
        </p>

        <a href="#galeria" className="btn-principal">
          Conocer nuestros trabajos
        </a>

      </div>
    </section>
  );
}

export default Hero;