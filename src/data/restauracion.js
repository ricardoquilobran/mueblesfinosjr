
import { assetPath } from "../utils/assetPath";

const restauracion = {
  hero: {
    titulo: "Restauración de Muebles",
    subtitulo:
      "Más de 40 años devolviendo la vida a muebles clásicos y de estilo.",
    imagen: assetPath("/images-webp/restauracion/portada.webp"),
  },

  introduccion: {
    titulo: "Restauración Artesanal",
    texto:
      "Cada mueble es tratado de forma individual respetando su diseño, historia y valor patrimonial. Utilizamos técnicas tradicionales combinadas con materiales modernos para garantizar una restauración duradera.",
  },

  tituloMuebles: "¿Qué restauramos?",

  descripcionMuebles:
    "Trabajamos una amplia variedad de muebles de madera, respetando siempre su diseño, su estructura y su valor histórico.",

  muebles: [
    {
      imagen: assetPath("/images-webp/restauracion/portada.webp"),
      titulo: "Mesas de comedor",
      descripcion:
        "Restauración completa de mesas antiguas, de comedor, centro y auxiliares.",
    },
    {
      imagen: assetPath("/images-webp/restauracion/portada.webp"),
      titulo: "Sillas",
      descripcion:
        "Reparación estructural, encolado, barnizado y recuperación de piezas originales.",
    },
    {
      imagen: assetPath("/images-webp/restauracion/portada.webp"),
      titulo: "Vitrinas",
      descripcion:
        "Recuperación de vitrinas clásicas conservando molduras, tallados y acabados.",
    },
    {
      imagen: assetPath("/images-webp/restauracion/portada.webp"),
      titulo: "Arrimos",
      descripcion:
        "Restauración de cómodas antiguas respetando su estilo y esencia.",
    },
    {
      imagen: assetPath("/images-webp/restauracion/portada.webp"),
      titulo: "Sitiales y Poltronas",
      descripcion:
        "Reparación de estructura, reconfección de piezas quebradas y tapicería de calidad.",
    },
    {
      imagen: assetPath("/images-webp/restauracion/portada.webp"),
      titulo: "Muebles de Estilo",
      descripcion:
        "Especialistas en Luis XV, Reina Ana, Normando, Bombé y muebles clásicos.",
    },
  ],

  proceso: {
    subtitulo: "Nuestro método de trabajo",

    titulo: "Proceso de Restauración",

    descripcion:
      "Cada restauración es única. Trabajamos cuidadosamente cada detalle para conservar la esencia del mueble y devolverle su belleza.",

    pasos: [
      {
        titulo: "Evaluación",
        texto:
          "Analizamos el estado del mueble, su estructura, acabados y materiales para definir el mejor proceso de restauración.",
      },
      {
        titulo: "Restauración",
        texto:
          "Reparamos la estructura, recuperamos tallados, chapas y piezas dañadas respetando el diseño original del mueble.",
      },
      {
        titulo: "Terminaciones",
        texto:
          "Aplicamos tintes, barnices y acabados de alta calidad para proteger y devolver la belleza natural de la madera.",
      },
      {
        titulo: "Entrega",
        texto:
          "Revisamos cuidadosamente cada detalle antes de entregar un trabajo terminado con la calidad que caracteriza a Muebles Finos JR.",
      },
    ],
  },

  cta: {
    titulo: "¿Tienes un mueble que merece una segunda vida?",
    texto:
      "Conversemos. Evaluaremos tu proyecto y te orientaremos sobre la mejor alternativa para restaurarlo.",
    boton: "Solicitar evaluación por WhatsApp",
    enlace: "https://wa.me/56986815967",
  },
};

export default restauracion;
