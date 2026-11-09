import configuracionSEO from "./configuracionSEO.js";
import generarSEO from "./generadorSEO.js";

const combinacionesPermitidas = {

  restauracion: [
    "sillas-antiguas",
    "mesas-antiguas",
    "comedores-antiguos",
    "poltronas",
    "sitiales",
    "muebles-antiguos",
    "banquetas",
    "respaldos-cama"
  ],

  reparacion: [
    "sillas-comedor",
    "sillas-antiguas",
    "sofas",
    "mesas-antiguas",
    "poltronas",
    "banquetas"
  ],

  retapizado: [
    "sofas",
    "juego-living",
    "living-completo",
    "sillas-comedor",
    "sillas-antiguas",
    "sitiales",
    "poltronas",
    "banquetas",
    "respaldos-cama"
  ]

};

function buscarMueble(slug){

  return configuracionSEO.muebles.find(
    item => item.slug === slug
  );

}

function crearSlug(servicio,mueble,zona=null){

  let slug = `${servicio}-${mueble}`;

  if(zona){

    slug += `-${zona}`;

  }

  return slug;

}

export default function generarPaginasSEO(){

  const paginas=[];

  configuracionSEO.servicios.forEach(servicio=>{

    const muebles = combinacionesPermitidas[servicio.id];

    muebles.forEach(muebleSlug=>{

      const mueble = buscarMueble(muebleSlug);

      if(!mueble) return;

      // Página principal SIN ciudad
      paginas.push(

        generarSEO({

          slug: crearSlug(
            servicio.id,
            mueble.slug
          ),

          servicio: servicio.id,

          objeto: mueble.nombre,

          zona: null,

          galeria: servicio.galeria,

          imagen: servicio.imagen

        })

      );

      // Páginas por comuna
      configuracionSEO.zonas.forEach(zona=>{

        paginas.push(

          generarSEO({

            slug: crearSlug(
              servicio.id,
              mueble.slug,
              zona.slug
            ),

            servicio: servicio.id,

            objeto: mueble.nombre,

            zona: zona.nombre,

            galeria: servicio.galeria,

            imagen: servicio.imagen

          })

        );

      });

    });

  });

  console.log(
    "TOTAL PAGINAS SEO:",
    paginas.length
  );

  return paginas;

}