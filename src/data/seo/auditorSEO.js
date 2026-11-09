import paginasSEO from "./crearPaginasSEOv3";



export default function auditorSEO(){



console.log(
"====================================="
);

console.log(
"       AUDITORÍA SEO V3"
);

console.log(
"====================================="
);



console.log(
"Total páginas:",
paginasSEO.length
);







function duplicados(array){


return array.filter(

(item,index)=>

array.indexOf(item)!==index

);


}







// SLUGS


const slugs = paginasSEO.map(
pagina=>pagina.slug
);



const slugDuplicados =
duplicados(slugs);



console.log(
""
);


console.log(
"SLUGS DUPLICADOS:",
slugDuplicados
);









// TITLES


const titles = paginasSEO.map(
pagina=>pagina.seo?.title
);



console.log(
""
);


console.log(
"TITLES DUPLICADOS:",
duplicados(titles)
);









// DESCRIPTIONS


const descriptions =
paginasSEO.map(

pagina=>
pagina.seo?.description

);



console.log(
""
);


console.log(
"DESCRIPTIONS DUPLICADAS:",
duplicados(descriptions)
);









// CAMPOS VACIOS


const errores=[];



paginasSEO.forEach(pagina=>{


if(!pagina.slug){

errores.push(
{
error:"slug vacío",
pagina:pagina.titulo
}
);

}



if(!pagina.seo?.title){

errores.push(
{
error:"title vacío",
pagina:pagina.titulo
}
);

}



if(!pagina.seo?.description){

errores.push(
{
error:"description vacío",
pagina:pagina.titulo
}
);

}



if(!pagina.hero?.imagen){

errores.push(
{
error:"imagen vacía",
pagina:pagina.titulo
}
);

}



});





console.log(
""
);


console.log(
"ERRORES:",
errores
);









// ENLACES


const sinEnlaces =
paginasSEO.filter(

pagina=>

!pagina.enlaces ||

pagina.enlaces.length===0

);



console.log(
""
);


console.log(
"PÁGINAS SIN ENLACES:",
sinEnlaces.map(
p=>p.slug
)
);









// HERO VS INTRO


const repetidas=[];



paginasSEO.forEach(pagina=>{


if(

pagina.hero?.subtitulo ===
pagina.introduccion?.texto

){


repetidas.push(
pagina.slug
);


}


});




console.log(
""
);


console.log(
"HERO IGUAL A INTRODUCCIÓN:",
repetidas
);








console.log(
""
);


console.log(
"====================================="
);

console.log(
"AUDITORÍA SEO V3 FINALIZADA"
);

console.log(
"====================================="
);



}