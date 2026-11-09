const ciudad = (zona) => zona ? ` en ${zona}` : "";

const plantillasSEO = {

  restauracion: {

    hero: (objeto, zona) =>
      `Restauración de ${objeto}${ciudad(zona)}`,

    subtitulo: (objeto) =>
      `Recuperamos ${objeto.toLowerCase()} mediante técnicas artesanales, conservando su estructura, diseño y detalles originales.`,

    introduccionTitulo: (objeto, zona) =>
      `Restauración artesanal de ${objeto}${ciudad(zona)}`,

    introduccionTexto: (objeto, zona) =>
      `En Muebles Finos JR realizamos restauración artesanal de ${objeto.toLowerCase()}${ciudad(zona)}, recuperando madera, estructura y terminaciones para devolver vida a muebles con historia y valor familiar.`,

    procesoTitulo: () =>
      "Restauración artesanal especializada",

    procesoTexto: () =>
      "Recuperamos cada mueble respetando su diseño original, estructura, madera y detalles que forman parte de su historia.",

    procesoPasos: () => [
      {
        titulo: "Evaluación del estado del mueble",
        texto: "Revisamos estructura, madera y detalles para definir el trabajo necesario."
      },
      {
        titulo: "Recuperación estructural",
        texto: "Reparamos uniones, piezas dañadas y elementos que afectan la estabilidad."
      },
      {
        titulo: "Restauración de terminaciones",
        texto: "Recuperamos colores, barnices, vetas y detalles originales."
      },
      {
        titulo: "Revisión final",
        texto: "Comprobamos cada detalle antes de entregar el mueble terminado."
      }
    ],

    ctaTitulo: () =>
      "¿Quieres restaurar tu mueble?",

    ctaTexto: () =>
      "Envíanos fotografías de tu mueble y evaluaremos la mejor alternativa de restauración."
  },

  reparacion: {

    hero: (objeto, zona) =>
      `Reparación de ${objeto}${ciudad(zona)}`,

    subtitulo: (objeto) =>
      `Reparamos ${objeto.toLowerCase()} solucionando daños estructurales, desgaste y problemas de uso.`,

    introduccionTitulo: (objeto, zona) =>
      `Reparación profesional de ${objeto}${ciudad(zona)}`,

    introduccionTexto: (objeto, zona) =>
      `En Muebles Finos JR realizamos reparación profesional de ${objeto.toLowerCase()}${ciudad(zona)}, solucionando daños estructurales, ajustes y deterioros para recuperar funcionalidad, seguridad y comodidad.`,

    procesoTitulo: () =>
      "Reparación profesional de muebles",

    procesoTexto: () =>
      "Solucionamos problemas estructurales y daños del uso diario para devolver seguridad y funcionalidad al mueble.",

    procesoPasos: () => [
      {
        titulo: "Diagnóstico inicial",
        texto: "Analizamos daños, desgaste y necesidades de reparación."
      },
      {
        titulo: "Reparación estructural",
        texto: "Corregimos problemas de madera, uniones, soportes y piezas dañadas."
      },
      {
        titulo: "Ajustes y mejoras",
        texto: "Realizamos los ajustes necesarios para recuperar comodidad y funcionamiento."
      },
      {
        titulo: "Control final",
        texto: "Revisamos el resultado antes de la entrega."
      }
    ],

    ctaTitulo: () =>
      "¿Necesitas reparar tu mueble?",

    ctaTexto: () =>
      "Cuéntanos qué problema presenta tu mueble y te orientaremos sobre la mejor solución."
  },

  retapizado: {

    hero: (objeto, zona) =>
      `Retapizado de ${objeto}${ciudad(zona)}`,

    subtitulo: (objeto) =>
      `Renovamos ${objeto.toLowerCase()} mediante retapización artesanal, mejorando comodidad, apariencia y terminaciones.`,

    introduccionTitulo: (objeto, zona) =>
      `Retapizado artesanal de ${objeto}${ciudad(zona)}`,

    introduccionTexto: (objeto, zona) =>
      `En Muebles Finos JR realizamos retapizado artesanal de ${objeto.toLowerCase()}${ciudad(zona)}, renovando telas, rellenos y estructuras para recuperar comodidad, estética y durabilidad.`,

    procesoTitulo: () =>
      "Retapización artesanal de muebles",

    procesoTexto: () =>
      "Renovamos telas, rellenos y detalles interiores para recuperar comodidad, estética y durabilidad.",

    procesoPasos: () => [
      {
        titulo: "Evaluación del mueble",
        texto: "Revisamos estructura, espuma, rellenos y estado general."
      },
      {
        titulo: "Preparación y desmontaje",
        texto: "Retiramos materiales antiguos preparando el mueble para su renovación."
      },
      {
        titulo: "Retapización artesanal",
        texto: "Aplicamos nuevos materiales y telas cuidando cada terminación."
      },
      {
        titulo: "Terminaciones finales",
        texto: "Revisamos costuras, ajustes y detalles antes de entregar."
      }
    ],

    ctaTitulo: () =>
      "¿Quieres renovar tu mueble?",

    ctaTexto: () =>
      "Envíanos fotografías y cuéntanos qué mueble deseas retapizar."
  }

};

export default plantillasSEO;