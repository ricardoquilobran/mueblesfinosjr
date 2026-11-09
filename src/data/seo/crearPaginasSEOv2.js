import serviciosSEOv2 from "./serviciosSEOv2";
import generarSEOv2 from "./generarSEOv2";



const paginasSEO = [];




// =====================================
// CREAR TODAS LAS PAGINAS
// =====================================


serviciosSEOv2.forEach(servicio=>{


const paginas = generarSEOv2(servicio);


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


return (

item.slug !== pagina.slug

);


});





const ranking = candidatos.map(item=>{


let puntos = 0;




// -----------------------------
// Diferente tipo de página
// -----------------------------

if(item.tipo !== pagina.tipo){

puntos += 10;

}




// -----------------------------
// Misma categoría
// -----------------------------


if(
item.categoria === pagina.categoria
){

puntos += 20;

}






// -----------------------------
// Servicios relacionados
// -----------------------------


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
"Retapizado"

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

puntos += 25;

}







// -----------------------------
// Coincidencia muebles
// -----------------------------


const palabras=[

"sillas",
"sillones",
"sofás",
"sofas",
"sitiales",
"poltronas",
"comedores",
"respaldo",
"cama",
"muebles"

];





palabras.forEach(palabra=>{


if(

pagina.titulo.toLowerCase().includes(palabra)

&&

item.titulo.toLowerCase().includes(palabra)

){

puntos +=15;

}


});







// -----------------------------
// Penalizar mismo servicio base
// -----------------------------


if(

pagina.servicioBase === item.servicioBase

){

puntos -=30;

}







return {

item,

puntos

};



});







// ordenar


ranking.sort((a,b)=>{


return b.puntos-a.puntos;


});








// =====================================
// SELECCIONAR 3 VARIADOS
// =====================================


const seleccionados=[];


const categorias=[];


const servicios=[];




for(const resultado of ranking){



const item = resultado.item;



if(
seleccionados.length >=3
){

break;

}




// evitar repetir exactamente lo mismo


if(

servicios.includes(item.servicioBase)

&&

categorias.includes(item.categoria)

){

continue;

}




seleccionados.push(item);



servicios.push(
item.servicioBase
);


categorias.push(
item.categoria
);



}






return seleccionados.map(item=>({


titulo:item.titulo,


slug:item.slug



}));



}









// =====================================
// ASIGNAR ENLACES A TODAS LAS PAGINAS
// =====================================


paginasSEO.forEach(pagina=>{


pagina.enlaces =
generarEnlacesRelacionados(pagina);



});







console.log(

"TOTAL PAGINAS SEO V2:",

paginasSEO.length

);



console.log(

"PRIMEROS ENLACES:",

paginasSEO[0].enlaces

);






export default paginasSEO;