import "./GalleryGrid.css";

export default function GalleryGrid({
  imagenes,
  indice,
  setIndice,
}) {

  if (!imagenes.length) {

    return (
      <p className="gallery-vacio">
        No hay imágenes disponibles en esta categoría.
      </p>
    );

  }

  const anterior = () => {

    setIndice((actual) =>
      actual === 0
        ? imagenes.length - 1
        : actual - 1
    );

  };

  const siguiente = () => {

    setIndice((actual) =>
      actual === imagenes.length - 1
        ? 0
        : actual + 1
    );

  };

  const imagenActual = imagenes[indice];

  return (

    <section className="gallery-viewer">

      <div className="gallery-imagen-container">

        <button
          className="gallery-control gallery-control-left"
          onClick={anterior}
          aria-label="Imagen anterior"
        >
          ‹
        </button>

        <img
          src={imagenActual.imagen}
          alt={imagenActual.titulo}
          className="gallery-imagen"
        />

        <button
          className="gallery-control gallery-control-right"
          onClick={siguiente}
          aria-label="Imagen siguiente"
        >
          ›
        </button>

      </div>

      <div className="gallery-info">

        <span className="gallery-categoria">
          {imagenActual.categoria}
        </span>

        <h3>
          {imagenActual.titulo}
        </h3>

        <div className="gallery-linea"></div>

        <p>
          {indice + 1} / {imagenes.length}
        </p>

      </div>

    </section>

  );
}
