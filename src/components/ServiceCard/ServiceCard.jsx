import { Link } from "react-router-dom";
import "./ServiceCard.css";

export default function ServiceCard({
  titulo,
  descripcion,
  imagen,
  enlace,
  boton,
}) {
  return (
    <article className="service-card">

      <img
        src={imagen}
        alt={titulo}
        className="service-card-img"
      />

      <div className="service-card-body">

        <h2>{titulo}</h2>

        <p>{descripcion}</p>

        <Link to={enlace} className="service-card-btn">
          {boton}
        </Link>

      </div>

    </article>
  );
}

