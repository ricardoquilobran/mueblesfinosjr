import useReveal from "../hooks/useReveal";


function Servicios() {
    const reveal = useReveal();
  return (
    <section
    ref={reveal}
    className="servicios reveal"
    id="servicios"
>
      <div className="container">

        <h2>Nuestros Servicios</h2>

        <div className="cards">

          <div className="card">
            <h3>Fabricación de Muebles Finos</h3>

            <p>
              Fabricamos muebles clásicos y contemporáneos completamente a
              medida, respetando el diseño, las proporciones y la calidad de
              cada proyecto.
            </p>
          </div>

          <div className="card">
            <h3>Restauraciónes</h3>

            <p>
              Recuperamos muebles antiguos conservando su identidad, técnicas
              tradicionales y terminaciones originales.
            </p>
          </div>

          <div className="card">
            <h3>Retapizado Premium</h3>

            <p>
              Renovamos sillones, sofás, sitiales, banquetas y mobiliario
              antiguo utilizando materiales de primera calidad.
            </p>
          </div>

          <div className="card">
            <h3>Enjuncado Artesanal</h3>

            <p>
              Restauramos y fabricamos asientos con enjuncado tradicional,
              manteniendo un oficio que hoy pocos talleres dominan.
            </p>
          </div>

          <div className="card">
            <h3>Trabajos Especiales</h3>

            <p>
              Desarrollo de proyectos para hoteles, instituciones,
              empresas y clientes particulares.
            </p>
          </div>

          <div className="card">
            <h3>Asesoría Personalizada</h3>

            <p>
              Orientamos a cada cliente en materiales, telas, maderas y
              terminaciones para lograr un resultado único.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Servicios;