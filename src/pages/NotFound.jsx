import { Link } from "react-router-dom";

import "./NotFound.css";


export default function NotFound(){


  return (

    <section className="not-found">


      <div className="not-found-container">


        <h1>
          Página no encontrada
        </h1>


        <p>
          La página que buscas no existe o fue movida.
        </p>


        <div className="not-found-buttons">


          <Link
            to="/"
            className="not-found-btn"
          >
            Volver al inicio
          </Link>


          <Link
            to="/"
            className="not-found-btn"
          >
            Ver servicios
          </Link>


        </div>


      </div>


    </section>

  );

}