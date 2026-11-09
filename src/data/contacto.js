
import { assetPath } from "../utils/assetPath";

const contacto = {
  hero: {
    titulo: "Contacto",

    subtitulo:
      "Conversemos sobre tu proyecto. Estaremos encantados de ayudarte.",

    imagen: assetPath("/images-webp/contacto/portada.webp"),
  },

  informacion: {
    telefono: "+56 9 8892 7778",

    correo: "contacto@mueblesfinosjr.cl",

    horario:
      "Lunes a Sábado · 09:00 a 20:00 hrs",

    cobertura:
      "Atendemos toda la Región Metropolitana."
  },

  faq: [
    {
      pregunta: "¿Qué muebles retapizan?",

      respuesta: "Retapizamos sofás, juegos de living, sitiales, poltronas, sillas de comedor, banquetas, cabeceras y una amplia variedad de muebles clásicos y modernos utilizando materiales de primera calidad."
    },

    {
      pregunta: "¿Restauran muebles antiguos?",

      respuesta: "Sí. Restauramos muebles antiguos respetando su diseño original, recuperando molduras, chapas, tallados y terminaciones para conservar su valor y personalidad."
    },

    {
      pregunta: "¿Pueden reconstruir piezas quebradas?",

      respuesta: "Sí. Construimos réplicas de patas, brazos, respaldos, molduras y otras piezas de madera dañadas o desgastadas con el paso del tiempo."
    },

    {
      pregunta: "¿Fabrican muebles nuevos?",

      respuesta: "Sí. Fabricamos muebles completamente nuevos y también muebles de estilo elaborados artesanalmente utilizando maderas nobles."
    },

    {
      pregunta: "¿Qué tipos de muebles de estilo trabajan?",

      respuesta: "Somos especialistas en muebles Luis XV, Reina Ana, Bombé, Normando y otros estilos clásicos tanto en fabricación como en restauración."
    },

    {
      pregunta: "¿Realizan barnizado?",

      respuesta: "Sí. Aplicamos distintos tipos de barnices, tintes y acabados para devolver la belleza natural de la madera."
    },

    {
      pregunta: "¿Realizan retiro y entrega de muebles?",

      respuesta: "Sí. Coordinamos el retiro y la entrega según la ubicación del cliente y el tipo de proyecto."
    },

    {
      pregunta: "¿Atienden toda la Región Metropolitana?",

      respuesta: "Sí. Atendemos clientes en todas las comunas de la Región Metropolitana."
    },

    {
      pregunta: "¿Cómo puedo solicitar una cotización?",

      respuesta: "Puedes llamarnos o escribirnos por WhatsApp y comentarnos qué tipo de trabajo necesitas realizar. Con esa información podremos coordinar una visita para evaluar el mueble y definir la mejor solución para tu proyecto."
    },

    {
      pregunta: "¿Puedo enviar fotografías por WhatsApp?",

      respuesta: "Sí. Es la forma más rápida de conocer el estado del mueble antes de coordinar una visita."
    }
  ],

  cta: {
    titulo: "¿Listo para comenzar tu proyecto?",

    texto: "Conversemos sobre tu proyecto y te ayudaremos a encontrar la mejor solución.",

    boton: "Hablar por WhatsApp",

    enlace: "https://wa.me/56986815967"
  }
};

export default contacto;
