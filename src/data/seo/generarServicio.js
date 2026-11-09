import galeria from "../galeria";
import serviciosSEOv3 from "./serviciosSEOv3";



function formatearTexto(texto=""){


return texto

.replaceAll("maipu","Maipú")
.replaceAll("santiago","Santiago")
.replaceAll("providencia","Providencia")
.replaceAll("las-condes","Las Condes")
.replaceAll("nunoa","Ñuñoa")
.replaceAll("la-florida","La Florida")
.replaceAll("puente-alto","Puente Alto")
.replaceAll("vitacura","Vitacura")
.replaceAll("san-miguel","San Miguel")
.replaceAll("macul","Macul");


}






/*=================================================
 GENERADOR DE ENLACES RELACIONADOS SEO V3
=================================================*/



function generarEnlacesRelacionados(servicio){


const resultados=[];



serviciosSEOv3

.filter(

item =>

item.slugBase !== servicio.slugBase

)

.forEach(item=>{


let puntos=0;




if(
item.categoria === servicio.categoria
){

puntos+=3;

}




if(
item.estilos &&
servicio.estilos
){


const iguales =

item.estilos.filter(

e=>servicio.estilos.includes(e)

);



if(iguales.length){

puntos+=2;

}


}




if(
item.comunas &&
servicio.comunas
){


const iguales =

item.comunas.filter(

c=>servicio.comunas.includes(c)

);



if(iguales.length){

puntos++;

}


}





if(puntos>0){


resultados.push({


titulo:item.titulo,


slug:item.slugBase,


peso:puntos


});


}


});





return resultados

.sort(

(a,b)=>b.peso-a.peso

)

.slice(0,6)

.map(item=>({


titulo:item.titulo,


slug:item.slug


}));



}







/*=================================================
 PROCESO
=================================================*/



function generarProceso(servicio){



if(servicio.categoria==="Restauración"){


return {


subtitulo:"Nuestro proceso",


titulo:"Restauración artesanal especializada",


descripcion:
"Recuperamos muebles antiguos respetando madera, estructura y detalles originales.",


pasos:[


{
titulo:"Evaluación del mueble",

texto:
"Analizamos estructura, madera, daños y características originales."
},


{
titulo:"Recuperación estructural",

texto:
"Reparamos uniones, piezas dañadas y elementos interiores."
},


{
titulo:"Restauración estética",

texto:
"Recuperamos barnices, colores, vetas y detalles artesanales."
},


{
titulo:"Control final",

texto:
"Revisamos cada detalle antes de entregar el mueble terminado."
}


]


};


}






if(servicio.categoria==="Retapizado"){


return {


subtitulo:"Nuestro proceso",


titulo:"Retapizado artesanal de muebles",


descripcion:
"Renovamos telas, espumas y rellenos recuperando comodidad y terminaciones.",


pasos:[


{
titulo:"Evaluación",

texto:
"Revisamos estructura, rellenos y estado general del mueble."
},


{
titulo:"Desmontaje",

texto:
"Retiramos materiales antiguos preparando la renovación."
},


{
titulo:"Nuevo tapizado",

texto:
"Instalamos telas, espumas y materiales seleccionados."
},


{
titulo:"Terminaciones",

texto:
"Revisamos costuras y detalles finales."
}


]


};


}





return {


subtitulo:"Nuestro proceso",


titulo:"Trabajo artesanal profesional",


descripcion:
"Realizamos cada proyecto cuidando materiales, estructura y terminaciones.",


pasos:[


{
titulo:"Evaluación inicial",

texto:
"Analizamos el estado y necesidades del mueble."
},


{
titulo:"Preparación",

texto:
"Realizamos ajustes y reparaciones necesarias."
},


{
titulo:"Trabajo artesanal",

texto:
"Aplicamos técnicas tradicionales."
},


{
titulo:"Entrega final",

texto:
"Revisamos cada detalle terminado."
}


]


};


}









/*=================================================
 GENERADOR PRINCIPAL
=================================================*/



export default function generarServicio(servicio){



const titulo =

formatearTexto(servicio.titulo);





return {



// mantenemos todo lo existente

...servicio,



// agregamos compatibilidad

slug:

servicio.slugBase,





titulo,






hero:{


titulo,


subtitulo:

servicio.descripcion,


imagen:

servicio.imagen


},







introduccion:{


titulo:

"Especialistas en "+titulo.toLowerCase(),



texto:

servicio.descripcion


},







muebles:



galeria.filter(


item =>


item.categoria?.toLowerCase()

===

servicio.categoria.toLowerCase()


),







proceso:

generarProceso(servicio),







enlaces:

generarEnlacesRelacionados(servicio),







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