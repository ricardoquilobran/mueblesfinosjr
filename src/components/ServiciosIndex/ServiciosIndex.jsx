import { Link } from "react-router-dom";

import serviciosSEO from "../../data/seo/servicios";

import "./ServiciosIndex.css";

export default function ServiciosIndex() {

  const categorias = {};

  serviciosSEO.forEach((servicio) => {

    if (!categorias[servicio.categoria]) {

      categorias[servicio.categoria] = [];

    }

    categorias[servicio.categoria].push(servicio);

  });

  const nombres = {

    restauracion: "Restauración",

    retapizado: "Retapizado",

    barnizado: "Barnizado",

    fabricacion: "Fabricación",

  };

  return (

    <section className="servicios-index">

      <div className="container">

        <h1>Todos nuestros servicios</h1>

        <p>

          Encuentra el servicio que necesitas y solicita una evaluación por WhatsApp.

        </p>

        {

          Object.entries(categorias).map(

            ([categoria, lista]) => (

              <div
                key={categoria}
                className="servicios-grupo"
              >

                <h2>

                  {nombres[categoria]}

                </h2>

                <ul>

                  {

                    lista.map((item) => (

                      <li key={item.slug}>

                        <Link to={`/${item.slug}`}>

                          {item.servicio} de {item.objeto}

                        </Link>

                      </li>

                    ))

                  }

                </ul>

              </div>

            )

          )

        }

      </div>

    </section>

  );

}