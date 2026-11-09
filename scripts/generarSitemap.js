import fs from "fs";
import serviciosSEO from "../src/data/seo/servicios.js";


const BASE_URL = "https://mueblesfinosjr.cl";


console.log("🚀 Generando sitemap SEO...");


// =============================
// ASEGURAR CARPETA DIST
// =============================

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}


// =============================
// ARRAY DE URLS
// =============================

const urls = [];


// =============================
// PAGINAS PRINCIPALES
// =============================

const paginasPrincipales = [

  "/",

  "/restauracion",

  "/retapizado",

  "/muebles-de-estilo",

  "/galeria",

  "/nosotros",

  "/contacto"

];



paginasPrincipales.forEach(url => {

  urls.push({

    loc: `${BASE_URL}${url}`,

    priority: "0.9"

  });

});



// =============================
// PAGINAS SEO GENERADAS
// =============================

serviciosSEO.forEach(servicio => {

  urls.push({

    loc: `${BASE_URL}/${servicio.slug}`,

    priority: "0.8"

  });

});




// =============================
// CREAR XML
// =============================

const xml = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">


${urls.map(url => `

<url>

<loc>${url.loc}</loc>

<priority>${url.priority}</priority>

</url>

`).join("")}


</urlset>
`;




// =============================
// GUARDAR SITEMAP
// =============================

fs.writeFileSync(

  "dist/sitemap.xml",

  xml,

  "utf8"

);



console.log(
  `✅ Sitemap generado: ${urls.length} URLs`
);