import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">

      <img
        src={`${import.meta.env.BASE_URL}images-webp/hero/portada.webp`}
        alt=""
        className="hero-bg"
        fetchPriority="high"
        decoding="async"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <img
          src={`${import.meta.env.BASE_URL}images-webp/logo/logo.webp`}
          alt="Muebles Finos JR"
          className="hero-logo"
          fetchPriority="high"
        />

        <div className="hero-tradicion">
          <span></span>
          <p>MÁS DE 40 AÑOS DE TRADICIÓN</p>
          <span></span>
        </div>

        <h1>
          MUEBLES QUE
          <br />
          CUENTAN HISTORIAS
        </h1>

        <div className="hero-servicios">
          <span>FABRICACIÓN</span>
          <i></i>
          <span>RESTAURACIÓN</span>
          <i></i>
          <span>RETAPIZADO</span>
        </div>

        <p className="hero-texto">
          Más de cuatro décadas dedicados a la fabricación,
          restauración y retapizado de muebles finos.
          Conservamos la tradición del trabajo artesanal,
          respetando la nobleza de la madera y cuidando
          cada detalle para entregar piezas únicas y
          duraderas.
        </p>

      </div>

    </section>
  );
}

export default Hero;