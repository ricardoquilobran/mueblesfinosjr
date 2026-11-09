import "./GalleryModal.css";
import { useEffect, useState } from "react";

export default function GalleryModal({
  abierto,
  imagenes = [],
  titulo,
  onClose,
}) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    setIndice(0);
  }, [abierto, imagenes]);

  useEffect(() => {
    if (!abierto) return;

    const cerrarConEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [abierto, onClose]);

  if (!abierto || imagenes.length === 0) {
    return null;
  }

  const siguiente = () => {
    setIndice((actual) =>
      (actual + 1) % imagenes.length
    );
  };

  const anterior = () => {
    setIndice((actual) =>
      (actual - 1 + imagenes.length) % imagenes.length
    );
  };

  return (
    <div
      className="gallery-modal-overlay"
      onClick={onClose}
    >
      <div
        className="gallery-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="gallery-modal-close"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          ✕
        </button>

        <h2>{titulo}</h2>

        <div className="gallery-modal-viewer">
          <button
            type="button"
            className="gallery-modal-arrow"
            onClick={anterior}
            aria-label="Imagen anterior"
          >
            ◀
          </button>

          <img
            src={imagenes[indice]}
            alt={titulo || "Trabajo realizado por Muebles Finos JR"}
            className="gallery-modal-image"
          />

          <button
            type="button"
            className="gallery-modal-arrow"
            onClick={siguiente}
            aria-label="Imagen siguiente"
          >
            ▶
          </button>
        </div>

        <p className="gallery-modal-counter">
          {indice + 1} de {imagenes.length}
        </p>
      </div>
    </div>
  );
}
