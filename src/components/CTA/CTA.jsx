import "./CTA.css";

 function CTA({
  titulo,
  texto,
  boton,
  enlace,
}) {
  return (
    <section className="cta">

      <div className="cta-container">

        <h2>{titulo}</h2>

        <p>{texto}</p>

        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          {boton}
        </a>

      </div>

    </section>
  );
}

export default CTA;
