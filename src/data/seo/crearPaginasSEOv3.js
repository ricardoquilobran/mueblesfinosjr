import serviciosSEOv3 from "./serviciosSEOv3";
import generarSEOv3 from "./generarSEOv3";



const paginasSEO = [];




// =====================================
// CREAR TODAS LAS PAGINAS SEO
// =====================================


serviciosSEOv3.forEach(servicio=>{


const paginas = generarSEOv3(servicio);


console.log(
"GENERANDO:",
servicio.titulo,
paginas.length
);



paginasSEO.push(
...paginas
);


});








// =====================================
// GENERAR ENLACES RELACIONADOS
// =====================================


function generarEnlacesRelacionados(pagina){



const candidatos = paginasSEO.filter(item=>{


return item.slug !== pagina.slug;


});








const ranking = candidatos.map(item=>{


let puntos = 0;





// =====================================
// MISMA CATEGORIA
// =====================================


if(
item.categoria === pagina.categoria
){

puntos +=15;

}








// =====================================
// SERVICIOS RELACIONADOS
// =====================================


const relaciones={


"Restauración":[

"Retapizado",

"Tapicería",

"Fabricación"

],



"Retapizado":[

"Restauración",

"Tapicería",

"Fabricación"

],



"Tapicería":[

"Restauración",

"Retapizado",

"Fabricación"

],



"Fabricación":[

"Restauración",

"Retapizado"

]

};






if(

relaciones[pagina.categoria]

?.includes(item.categoria)

){

puntos +=30;

}









// =====================================
// COINCIDENCIA DE MUEBLE
// =====================================


const palabras=[


"sillas",

"sillones",

"sofás",

"sofas",

"sitiales",

"poltronas",

"comedores",

"mesas",

"respaldo",

"cama",

"muebles"

];






palabras.forEach(palabra=>{


const paginaTexto =
pagina.titulo.toLowerCase();


const itemTexto =
item.titulo.toLowerCase();





if(

paginaTexto.includes(palabra)

&&

itemTexto.includes(palabra)

){

puntos +=20;

}


});









// =====================================
// PENALIZAR MISMA FAMILIA
// =====================================


if(

pagina.servicioBase === item.servicioBase

){

puntos -=40;

}









// =====================================
// PENALIZAR MISMO TIPO
// =====================================


if(

pagina.tipo === item.tipo

){

puntos -=10;

}









return {


item,

puntos


};



});









// ordenar por puntuación


ranking.sort((a,b)=>{


return b.puntos-a.puntos;


});









// =====================================
// SELECCIONAR 3 ENLACES VARIADOS
// =====================================


const seleccionados=[];


const serviciosUsados=[];


const categoriasUsadas=[];





for(const resultado of ranking){



if(
seleccionados.length >=3
){

break;

}




const item = resultado.item;







// evitar repetir mismo servicio


if(

serviciosUsados.includes(item.servicioBase)

){

continue;

}







// evitar demasiadas páginas misma categoría


if(

categoriasUsadas.filter(

cat=>cat===item.categoria

).length >=2

){

continue;

}







seleccionados.push(item);




serviciosUsados.push(
item.servicioBase
);



categoriasUsadas.push(
item.categoria
);



}









return seleccionados.map(item=>({


titulo:item.titulo,


slug:item.slug


}));



}











// =====================================
// ASIGNAR ENLACES
// =====================================


paginasSEO.forEach(pagina=>{


pagina.enlaces =

generarEnlacesRelacionados(pagina);



});









console.log(

"TOTAL PAGINAS SEO V3:",

paginasSEO.length

);






console.log(

"PRIMEROS ENLACES V3:",

paginasSEO[0]?.enlaces

);









export default paginasSEO;