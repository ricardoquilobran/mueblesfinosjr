import "./FeatureCard.css";
import ServiceIcon from "../ServiceIcon/ServiceIcon";

export default function FeatureCard({
  titulo,
  descripcion,
  onClick,
}) {
  return (
    <article className="feature-card">

      <div className="feature-card-content">

        <ServiceIcon tipo={titulo} />

        <h3>{titulo}</h3>

        <p>{descripcion}</p>

        <button
          className="feature-card-link"
          onClick={onClick}
        >
          Ver nuestros trabajos →
        </button>

      </div>

    </article>
  );
}
