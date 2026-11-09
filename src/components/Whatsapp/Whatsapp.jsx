
import { assetPath } from "../../utils/assetPath";

import "./Whatsapp.css";

export default function Whatsapp() {
  const telefono = "56986815967";

  const mensaje =
    "Hola, quisiera realizar una consulta sobre un mueble.";

  const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <a
      href={enlace}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <div className="whatsapp-icono">
        <img
          src={assetPath("/images-webp/logo/whatsapp.webp")}
          alt="WhatsApp"
        />
      </div>

      <div className="whatsapp-texto">
        <strong>¿Necesitas ayuda?</strong>

        <span>Escríbenos por WhatsApp</span>
      </div>
    </a>
  );
}
