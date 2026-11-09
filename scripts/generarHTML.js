import fs from "fs";
import path from "path";
import { createServer } from "vite";


const __dirname = path.resolve();


async function generarHTML(){


console.log("🚀 Iniciando generación SEO estática...");



const vite = await createServer({
    server:{
        middlewareMode:true
    }
});



const { render } = await vite.ssrLoadModule(
    "/src/entry-server.jsx"
);



const servicios = await import(
    "../src/data/seo/servicios.js"
);



const lista = servicios.default;



console.log(
    "TOTAL PAGINAS SEO:",
    lista.length
);



const template = fs.readFileSync(
    "index.html",
    "utf8"
);



for(const pagina of lista){


    const url =
    "/" + pagina.slug;



    console.log(
        "Generando:",
        url
    );



    const appHtml =
    await render(url);



    let html =
    template;



    html =
    html.replace(
        "<div id=\"root\"></div>",
        `<div id="root">${appHtml}</div>`
    );



    html =
    html.replace(
        "<head>",
        `<head>
<meta charset="UTF-8">`
    );



    const carpeta =
    path.join(
        "dist",
        pagina.slug
    );



    fs.mkdirSync(
        carpeta,
        {
            recursive:true
        }
    );



    fs.writeFileSync(
        path.join(
            carpeta,
            "index.html"
        ),
        html,
        {
            encoding:"utf8"
        }
    );


}



await vite.close();



console.log(
    "✅ Generación SEO terminada"
);



}



generarHTML();