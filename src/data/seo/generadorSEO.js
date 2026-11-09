import plantillasSEO from "./plantillasSEO.js";

export default function generarSEO({

  servicio,

  objeto,

  zona,

  slug,

  galeria,

  imagen

}) {

  const plantilla = plantillasSEO[servicio];

  if (!plantilla) {

    console.error(
      "No existe plantilla SEO para:",
      servicio
    );

    return null;

  }

  const tituloHero =
    plantilla.hero(
      objeto,
      zona
    );



  /*
  ==========================================
  IMAGEN SEO
  ==========================================
  */

  const imagenSEO =
    `/images-webp/seo/${slug}.webp`;



  return {

    slug,

    servicio:
      servicio === "restauracion"
        ? "Restauración"
        : servicio === "retapizado"
        ? "Retapizado"
        : "Reparación",

    objeto,

    ciudad: zona,

    galeria,

    enlaces:
      generarEnlacesRelacionados(servicio),




    hero: {

      titulo:
        tituloHero,

      subtitulo:
        plantilla.subtitulo(
          objeto
        ),

      /*
      Si aún no existe una imagen SEO,
      simplemente deja la portada actual.
      Cuando la vayas agregando,
      solo cambia esta línea por imagenSEO.
      */

      imagen:

        imagen,

      // En el futuro:
      // imagen: imagenSEO,

      alt:
        `${tituloHero} realizado por Muebles Finos JR`

    },






    introduccion: {

      titulo:
        plantilla.introduccionTitulo(
          objeto,
          zona
        ),

      texto:
        plantilla.introduccionTexto(
          objeto,
          zona
        )

    },






    proceso: {

      subtitulo:
        "Nuestro proceso",

      titulo:
        plantilla.procesoTitulo(),

      descripcion:
        plantilla.procesoTexto(),

      pasos:
        plantilla.procesoPasos()

    },







    cta: {

      titulo:
        plantilla.ctaTitulo(),

      texto:
        plantilla.ctaTexto(),

      boton:
        "Solicitar evaluación",

      enlace:
        "https://wa.me/56986815967"

    },








    seo: {

      title:
        `${tituloHero} | Muebles Finos JR`,

      description:
        plantilla.introduccionTexto(
          objeto,
          zona
        ),

      image:

        imagen,

      // En el futuro:
      // image: imagenSEO,

      alt:
        `${tituloHero} realizado por especialistas en restauración de muebles`

    }

  };

}









function generarEnlacesRelacionados(servicio) {

  switch (servicio) {

    case "restauracion":

      return [

        {

          titulo:
            "Restauración de muebles antiguos",

          slug:
            "restauracion-muebles-antiguos"

        },

        {

          titulo:
            "Restauración de sillas antiguas",

          slug:
            "restauracion-sillas-antiguas"

        },

        {

          titulo:
            "Retapizado de sofás",

          slug:
            "retapizado-sofas"

        }

      ];



    case "retapizado":

      return [

        {

          titulo:
            "Retapizado de sofás",

          slug:
            "retapizado-sofas"

        },

        {

          titulo:
            "Retapizado de sitiales",

          slug:
            "retapizado-sitiales"

        },

        {

          titulo:
            "Restauración de muebles antiguos",

          slug:
            "restauracion-muebles-antiguos"

        }

      ];



    case "reparacion":

      return [

        {

          titulo:
            "Reparación de sofás",

          slug:
            "reparacion-sofas"

        },

        {

          titulo:
            "Restauración de muebles antiguos",

          slug:
            "restauracion-muebles-antiguos"

        },

        {

          titulo:
            "Retapizado de sofás",

          slug:
            "retapizado-sofas"

        }

      ];



    default:

      return [];

  }

}