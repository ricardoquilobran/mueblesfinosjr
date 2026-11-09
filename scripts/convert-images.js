import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const inputDir = "./public/images";
const outputDir = "./public/images-webp";

async function recorrer(carpeta) {
    const archivos = await fs.readdir(carpeta, { withFileTypes: true });

    for (const archivo of archivos) {

        const ruta = path.join(carpeta, archivo.name);

        if (archivo.isDirectory()) {

            await recorrer(ruta);

            continue;
        }

        if (!/\.(png|jpg|jpeg)$/i.test(archivo.name))
            continue;

        const relativa = path.relative(inputDir, ruta);

        const destino = path.join(
            outputDir,
            relativa.replace(/\.(png|jpg|jpeg)$/i, ".webp")
        );

        await fs.mkdir(path.dirname(destino), { recursive: true });

        const imagen = sharp(ruta);

        const metadata = await imagen.metadata();

        let ancho = metadata.width;

        if (ancho > 1920)
            ancho = 1920;

        await imagen
            .resize({
                width: ancho,
                withoutEnlargement: true,
            })
            .webp({
                quality: 82,
                effort: 6,
            })
            .toFile(destino);

        console.log("✔", relativa);
    }
}

await recorrer(inputDir);

console.log("\nConversión terminada.");
