import useReveal from "../hooks/useReveal";

function Nosotros() {

  const reveal = useReveal();

  return (
    <section
      ref={reveal}
      className="nosotros reveal"
      id="nosotros"
    >
      <div className="container">

        <h2>Tradición, Oficio y Calidad</h2>

        <p>
           "Muebles Finos JR" nace hace más de cuatro décadas en la
    comuna de San Miguel, con el propósito de preservar el oficio de la
    ebanistería y entregar muebles de excelente calidad, fabricados y
    restaurados de manera artesanal.
        </p>

        <p>
        A comienzos de la década del 2000, traslada sus operaciones
    a la comuna de Maipú, junto al tradicional restaurante "Chancho con Chaleco",
    consolidando su presencia y dándose a conocer entre clientes de este
    importante sector de la Región Metropolitana.
        </p>

        <p>
          Desde entonces, se ha mantenido el compromiso con la excelencia,
    atendiendo clientes en toda la Región Metropolitana y regiones aledañas,
    distinguiéndonos por la calidad de nuestros trabajos, la honestidad y el
    cuidado puesto en cada proyecto.
        </p>

        <p>
          Nuestra especialidad abarca la fabricación de muebles en maderas nobles, la
    restauración de mobiliario, el retapizado, el enjuncado artesanal y la
    recuperación de piezas patrimoniales, respetando la esencia de cada mueble
    y cuidando cada detalle para entregar resultados únicos, duraderos y de la
    más alta calidad.
        </p>

      </div>
    </section>
  );
}

export default Nosotros;