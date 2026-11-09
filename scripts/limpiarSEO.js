import fs from "fs";


const archivo =
"./src/data/seo/serviciosSEOv3.js";


let texto =
fs.readFileSync(
archivo,
"utf8"
);



const cambios = {

"Ã³":"ó",
"Ãº":"ú",
"Ã±":"ñ",
"Ã¡":"á",
"Ã©":"é",
"Ã­":"í",

"Ã\"":"ó",

"Ã\"":"ó",

"RestauraciÃ³n":"Restauración",
"RestauraciÃ\"n":"Restauración",

"FabricaciÃ³n":"Fabricación",
"FabricaciÃ\"n":"Fabricación",

"TapicerÃ­a":"Tapicería",

"clÃ¡sicos":"clásicos",
"clÃ¡sicas":"clásicas",

"tÃ©cnicas":"técnicas",

"sofÃ¡s":"sofás",

"capitonÃ©":"capitoné",

"diseÃ±o":"diseño",
"diseÃ±os":"diseños",

"daÃ±ados":"dañados",

"carpinterÃ­a":"carpintería",

"tapicerÃ­a":"tapicería"



};



for(
const [malo, bueno]
of Object.entries(cambios)
){

texto =
texto.replaceAll(
malo,
bueno
);

}



fs.writeFileSync(

"./src/data/seo/serviciosSEOv3_limpio.js",

texto,

"utf8"

);


console.log(
"Limpieza terminada"
);