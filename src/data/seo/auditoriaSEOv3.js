import paginasSEO from "./crearPaginasSEOv3";



console.log(
"====================================="
);

console.log(
"       AUDITORIA SEO V3 CALIDAD"
);

console.log(
"====================================="
);





console.log(
"Total páginas:",
paginasSEO.length
);








// =====================================
// 1. LONGITUD TITLES
// =====================================


const titlesProblema=[];



paginasSEO.forEach(pagina=>{


const title =
pagina.seo?.title || "";



if(
title.length < 35 ||
title.length > 65
){


titlesProblema.push({

slug:pagina.slug,

largo:title.length,

title

});


}


});



console.log(
"Titles fuera de rango:"
);


console.table(
titlesProblema
);









// =====================================
// 2. LONGITUD DESCRIPTIONS
// =====================================


const descriptionsProblema=[];



paginasSEO.forEach(pagina=>{


const desc =
pagina.seo?.description || "";



if(
desc.length < 120 ||
desc.length > 170
){


descriptionsProblema.push({

slug:pagina.slug,

largo:desc.length,

description:desc

});


}


});



console.log(
"Descriptions fuera de rango:"
);



console.table(
descriptionsProblema
);









// =====================================
// 3. CONTENIDO POBRE
// =====================================


const contenidoCorto=[];



paginasSEO.forEach(pagina=>{


const texto =

pagina.introduccion?.texto || "";



if(
texto.length < 120
){


contenidoCorto.push({

slug:pagina.slug,

largo:texto.length,

texto


});


}



});



console.log(
"Contenido corto:"
);



console.table(
contenidoCorto
);









// =====================================
// 4. ENLACES RECIBIDOS
// =====================================


const enlacesRecibidos={};




paginasSEO.forEach(pagina=>{


enlacesRecibidos[pagina.slug]=0;


});






paginasSEO.forEach(pagina=>{


pagina.enlaces?.forEach(enlace=>{


if(
enlacesRecibidos[enlace.slug] !== undefined
){


enlacesRecibidos[enlace.slug]++;


}



});



});







const paginasSinEnlaces=[];



Object.entries(enlacesRecibidos)

.forEach(([slug,total])=>{


if(total===0){


paginasSinEnlaces.push({

slug,

enlaces:0


});


}



});





console.log(
"Paginas sin enlaces internos:"
);



console.table(
paginasSinEnlaces
);









// =====================================
// 5. PAGINAS MAS IMPORTANTES
// =====================================


const rankingEnlaces =

Object.entries(enlacesRecibidos)

.sort((a,b)=>b[1]-a[1])

.slice(0,15);





console.log(
"Paginas con mas enlaces internos:"
);



console.table(
rankingEnlaces
);









// =====================================
// 6. REPETICION DE INTRODUCCIONES
// =====================================


const textos={};



paginasSEO.forEach(pagina=>{


const texto =
pagina.introduccion?.texto;



if(texto){


if(!textos[texto]){

textos[texto]=[];

}


textos[texto].push(
pagina.slug
);


}



});






const repetidos=[];



Object.entries(textos)

.forEach(([texto,slugs])=>{


if(slugs.length>1){


repetidos.push({

cantidad:slugs.length,

paginas:slugs

});


}



});






console.log(
"Introducciones repetidas:"
);



console.table(
repetidos
);









console.log(
"====================================="
);

console.log(
" AUDITORIA SEO V3 FINALIZADA "
);

console.log(
"====================================="
);