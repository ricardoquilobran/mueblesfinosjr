import "./PageHero.css";

export default function PageHero({
  titulo,
  subtitulo,
  imagen,
}) {
  const estilo = imagen
    ? {
        "--page-hero-image": `url("${imagen}")`,
      }
    : {};

  return (
    <section
      className={`page-hero ${
        imagen ? "page-hero-imagen" : "page-hero-simple"
      }`}
      style={estilo}
    >
      <div className="page-hero-content">
        <span className="page-hero-detalle">
          Muebles Finos JR
        </span>

        <h1>{titulo}</h1>

        <div className="page-hero-linea"></div>

        <p>{subtitulo}</p>
      </div>
    </section>
  );
}
