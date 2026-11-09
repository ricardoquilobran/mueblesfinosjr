import "./ProcesoServicio.css";


export default function ProcesoServicio({
  subtitulo,
  titulo,
  descripcion,
  pasos = [],
}) {


  return (

    <section className="proceso-servicio">


      <div className="proceso-servicio-container">



        <header className="proceso-servicio-encabezado">


          {subtitulo && (

            <span className="proceso-servicio-subtitulo">

              {subtitulo}

            </span>

          )}



          <h2>

            {titulo}

          </h2>




          {descripcion && (

            <p>

              {descripcion}

            </p>

          )}



        </header>





        <div className="proceso-servicio-linea">



          {pasos.map((paso, index) => (



            <article

              className="proceso-servicio-paso"

              key={index}

            >



              <div className="proceso-servicio-numero">

                {String(index + 1).padStart(2, "0")}

              </div>




              <h3>

{
  typeof paso === "object"
  ? paso.titulo
  : paso
}

</h3>




             <p>

{
  typeof paso === "object"
  ? (paso.texto || paso.descripcion)
  : ""
}

</p>



            </article>



          ))}



        </div>



      </div>



    </section>


  );


}