import { Link } from "react-router-dom";

import "./FeatureGrid.css";

export default function FeatureGrid({
  items = [],
}) {
  return (
    <section className="feature-grid">

      <div className="feature-grid-lista">

        {items.map((item, index) => (

          <article
            className="feature-item"
            key={`${item.titulo}-${index}`}
          >

            <span className="feature-numero">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="feature-contenido">

              <h3>{item.titulo}</h3>

              <p>
                {item.descripcion || item.texto}
              </p>

            </div>

          </article>

        ))}

      </div>

      <div className="feature-footer">

        <Link
          to="/galeria"
          className="feature-enlace"
        >
          Explorar nuestros trabajos

          <span>→</span>
        </Link>

      </div>

    </section>
  );
}
