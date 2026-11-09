import "./ServiceIcon.css";

export default function ServiceIcon({ tipo }) {

  const iconos = {
    "Sofás": "🛋",
    "Sillas": "🪑",
    "Sitiales": "👑",
    "Living": "🏠",
    "Poltronas": "💺",
    "Cabeceras": "🛏",
    "Mesas de comedor": "🪵",
    "Mesas": "🪵",
    "Vitrinas": "🪞",
    "Arrimos": "🗄",
    "Muebles de Estilo": "🏛",
  };

  return (
    <div className="service-icon">
      {iconos[tipo] || "🪵"}
    </div>
  );

}
