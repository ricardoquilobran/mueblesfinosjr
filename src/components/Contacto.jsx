import useReveal from "../hooks/useReveal";

function Contacto() {

    const reveal = useReveal();
  return (
    <section
    ref={reveal}
    className="contacto reveal"
    id="contacto"
>
      <div className="container">

        <h2>Contáctanos</h2>

        <p className="contacto-texto">
          Cuéntanos tu proyecto. Fabricamos muebles a medida,
        restauramos y retapizados distintos tipos de muebles,
        con más de 40 años de experiencia.
        Solicita tu cotización sin compromiso.
        </p>

        <div className="contacto-info">

          <div className="contacto-card">
            <h3>📞 Teléfono</h3>
            <p>+569 8892 7778</p>
            <h3>Whatsapp</h3>
            <p>+569 7916 0098</p>
          </div>

          <div className="contacto-card">
            <h3>Correo</h3>
            <p>contacto@mueblesfinosjr.cl</p>
          </div>

          <div className="contacto-card">
            <h3>Talleres</h3>
            <p>San Ramón y Maipú</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacto;