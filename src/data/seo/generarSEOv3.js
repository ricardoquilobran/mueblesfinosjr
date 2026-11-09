function limpiarSlug(texto=""){


return texto

.toLowerCase()

.normalize("NFD")

.replace(/[\u0300-\u036f]/g,"")

.replace(/ñ/g,"n")

.replace(/\s+/g,"-");


}






function nombreComuna(comuna=""){


return comuna

.replaceAll("-"," ")

.replace(/\b\w/g, letra => letra.toUpperCase());


}









function crearDescripcionComuna(servicio, comuna){


const ciudad = nombreComuna(comuna);



return (

`${servicio.titulo} en ${ciudad}. ` +

`${servicio.descripcion} ` +

`Realizamos trabajos artesanales personalizados en muebles antiguos y modernos.`


);


}









function crearDescripcionEstilo(servicio, estilo){



return (

`${servicio.titulo} estilo ${estilo}. ` +

`${servicio.descripcion} ` +

`Recuperamos diseños clásicos respetando detalles, estructura y terminaciones originales.`


);


}









function crearDescripcionMaterial(servicio, material){



return (

`${servicio.titulo} en ${material}. ` +

`${servicio.descripcion} ` +

`Trabajamos con materiales seleccionados buscando comodidad, resistencia y calidad.`


);


}









function crearPagina({


slug,

titulo,

descripcion,

imagen,

categoria,

tipo,

servicioBase



}){


return {


slug,


titulo,


categoria,


tipo,


servicioBase,





hero:{


titulo,


subtitulo:


`Especialistas en ${titulo.toLowerCase()} con técnicas artesanales y experiencia en recuperación de muebles.`,


imagen,


alt:titulo


},








introduccion:{


titulo:


"Trabajo artesanal personalizado",



texto:


descripcion


},








seo:{


title:


`${titulo} | Muebles Finos JR`,



description:


descripcion.slice(0,160)


},








muebles:[],

enlaces:[],







proceso:{


subtitulo:"Nuestro proceso artesanal",


titulo:"Recuperamos muebles cuidando cada detalle",


descripcion:
"Evaluamos cada pieza para conservar estructura, materiales y diseño original.",



pasos:[


{

titulo:"Evaluación",

texto:
"Analizamos el estado del mueble y definimos el trabajo necesario."

},


{

titulo:"Preparación",

texto:
"Realizamos ajustes, reparación y preparación de superficies."

},


{

titulo:"Trabajo artesanal",

texto:
"Aplicamos técnicas tradicionales de restauración, tapicería o fabricación."

},


{

titulo:"Control final",

texto:
"Revisamos terminaciones antes de entregar el mueble terminado."

}


]


},







cta:{


titulo:


"¿Quieres recuperar tu mueble?",



texto:


"Envíanos fotografías y cuéntanos qué necesitas realizar.",



boton:


"Solicitar evaluación",



enlace:


"https://wa.me/56986815967"


}





};


}









export default function generarSEOv3(servicio){



const paginas=[];







// =================================
// PAGINA PRINCIPAL
// =================================



paginas.push(


crearPagina({


slug:

servicio.slugBase,


titulo:

servicio.titulo,


descripcion:

servicio.descripcion,


imagen:

servicio.imagen,


categoria:

servicio.categoria,


tipo:

"principal",


servicioBase:

servicio.slugBase


})


);









// =================================
// PAGINAS POR COMUNA
// =================================



servicio.comunas?.forEach(comuna=>{



paginas.push(


crearPagina({


slug:


`${servicio.slugBase}-${comuna}`,



titulo:


`${servicio.titulo} en ${nombreComuna(comuna)}`,



descripcion:


crearDescripcionComuna(servicio,comuna),



imagen:


servicio.imagen,



categoria:


servicio.categoria,



tipo:


"comuna",



servicioBase:


servicio.slugBase



})


);


});











// =================================
// PAGINAS POR ESTILO
// =================================



servicio.estilos?.forEach(estilo=>{



paginas.push(


crearPagina({


slug:


`${servicio.slugBase}-${limpiarSlug(estilo)}`,



titulo:


`${servicio.titulo} ${estilo}`,



descripcion:


crearDescripcionEstilo(servicio,estilo),



imagen:


servicio.imagen,



categoria:


servicio.categoria,



tipo:


"estilo",



servicioBase:


servicio.slugBase



})


);



});











// =================================
// PAGINAS POR MATERIAL
// =================================



servicio.materiales?.forEach(material=>{



paginas.push(


crearPagina({


slug:


`${servicio.slugBase}-${limpiarSlug(material)}`,



titulo:


`${servicio.titulo} en ${material}`,



descripcion:


crearDescripcionMaterial(servicio,material),



imagen:


servicio.imagen,



categoria:


servicio.categoria,



tipo:


"material",



servicioBase:


servicio.slugBase



})


);



});









return paginas;


}