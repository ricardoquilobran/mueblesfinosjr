function Whatsapp() {

  const telefono = "56979160098";

  const mensaje = encodeURIComponent(
    "Hola. Me gustaría solicitar información sobre los servicios de Muebles Finos JR."
  );

  return (
    <a
      href={`https://wa.me/${telefono}?text=${mensaje}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
      aria-label="Contactar por WhatsApp"
    >
      <img
        src="/img/whatsapp.png"
        alt="WhatsApp"
      />

      <div className="whatsapp-texto">
        <strong>¿Necesitas ayuda?</strong>
        <span>Escríbenos por WhatsApp</span>
      </div>

    </a>
  );

}

export default Whatsapp;