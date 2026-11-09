import paginasSEO from "./crearPaginasSEOv2";



console.log(
"====================================="
);

console.log(
"       AUDITORIA SEO V2"
);

console.log(
"====================================="
);





console.log(
"Total páginas:",
paginasSEO.length
);






// =====================================
// DUPLICADOS
// =====================================


function detectarDuplicados(array){


return array.filter((item,index)=>{


return array.indexOf(item)!==index;


});


}





const slugs =
paginasSEO.map(p=>p.slug);



const titles =
paginasSEO.map(p=>p.seo?.title);



const descriptions =
paginasSEO.map(p=>p.seo?.description);






console.log(
"Slugs duplicados:",
detectarDuplicados(slugs)
);



console.log(
"Titles duplicados:",
detectarDuplicados(titles)
);



console.log(
"Descriptions duplicadas:",
detectarDuplicados(descriptions)
);









// =====================================
// CAMPOS VACIOS
// =====================================



const errores=[];






paginasSEO.forEach(pagina=>{





if(!pagina.slug){

errores.push(
`${pagina.titulo}: slug vacío`
);

}





if(!pagina.titulo){

errores.push(
`${pagina.slug}: titulo vacío`
);

}





if(!pagina.seo?.title){

errores.push(
`${pagina.slug}: SEO title vacío`
);

}





if(!pagina.seo?.description){

errores.push(
`${pagina.slug}: description vacía`
);

}





if(!pagina.hero?.imagen){

errores.push(
`${pagina.slug}: imagen vacía`
);

}





if(!pagina.hero?.alt){

errores.push(
`${pagina.slug}: alt vacío`
);

}





});








console.log(
"Errores encontrados:"
);



console.table(errores);









// =====================================
// ENLACES
// =====================================



const erroresEnlaces=[];



paginasSEO.forEach(pagina=>{


pagina.enlaces?.forEach(enlace=>{


if(

enlace.slug===pagina.slug

){


erroresEnlaces.push(

`${pagina.slug}: se enlaza a sí misma`

);


}



});



});





console.log(
"Errores enlaces:"
);



console.table(
erroresEnlaces
);








// =====================================
// HERO VS INTRO
// =====================================



const repetidos=[];



paginasSEO.forEach(pagina=>{


if(

pagina.hero?.subtitulo === pagina.introduccion?.texto

){


repetidos.push(
pagina.slug
);


}



});





console.log(
"Hero igual a introducción:"
);



console.table(
repetidos
);








console.log(
"====================================="
);


console.log(
" AUDITORIA FINALIZADA "
);


console.log(
"====================================="
);