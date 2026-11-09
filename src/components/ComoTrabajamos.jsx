import useReveal from "../hooks/useReveal";

function ComoTrabajamos() {
    const reveal = useReveal();
  const pasos = [
    {
      numero: "01",
      titulo: "Contacto",
      texto:
        "Cuéntanos qué necesitas mediante WhatsApp, teléfono o formulario."
    },
    {
      numero: "02",
      titulo: "Visita y Evaluación",
      texto:
        "Visitamos tu domicilio o te indicamos las alternativas para evaluar el trabajo."
    },
    {
      numero: "03",
      titulo: "Presupuesto",
      texto:
        "Entregamos una cotización clara y detallada para cada tipo de mueble."
    },
    {
      numero: "04",
      titulo: "Fabricación o Restauración",
      texto:
        "Comenzamos el trabajo utilizando materiales de calidad y técnicas artesanales."
    },
    {
      numero: "05",
      titulo: "Entrega",
      texto:
        "Realizamos la entrega cuidando cada detalle hasta que el cliente quede completamente satisfecho."
    }
  ];

  return (
   <section
    ref={reveal}
    className="proceso reveal"
    id="proceso"
>

      <div className="container">

        <h2>¿Cómo Trabajamos?</h2>

        <div className="linea-proceso">

          {pasos.map((paso) => (

            <div className="paso" key={paso.numero}>

              <div className="numero">
                {paso.numero}
              </div>

              <h3>{paso.titulo}</h3>

              <p>{paso.texto}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ComoTrabajamos;