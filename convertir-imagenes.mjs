import sharp from "sharp";
import fs from "fs";
import path from "path";

const carpeta = "./public/images/muebles-estilo";

const archivos = fs.readdirSync(carpeta);

for (const archivo of archivos) {
  const extension = path.extname(archivo).toLowerCase();

  if (extension === ".jpg" || extension === ".jpeg") {
    const entrada = path.join(carpeta, archivo);

    const nombre = path.basename(archivo, extension);

    const salida = path.join(
      carpeta,
      `${nombre}.png`
    );

    await sharp(entrada)
      .png()
      .toFile(salida);

    console.log(`CONVERTIDA: ${archivo} -> ${nombre}.png`);
  }
}

console.log("");
console.log("TODAS LAS IMAGENES FUERON CONVERTIDAS");