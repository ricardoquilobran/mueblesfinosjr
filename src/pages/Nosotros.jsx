
import PageHero from "../components/PageHero/PageHero";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import { assetPath } from "../utils/assetPath";

import "./Nosotros.css";

export default function Nosotros() {
  return (
    <>
      <PageHero
        titulo="Nosotros"
        subtitulo="Tradición familiar, experiencia y trabajo artesanal en muebles."
      />

      <section className="nosotros-contenido">
        <Container>
          <SectionTitle
            titulo="Nuestra Historia"
            descripcion="Más de 40 años dedicados a la restauración y fabricación artesanal de muebles."
          />

          <div className="nosotros-historia">
            <p>
              Muebles Finos JR es un taller familiar especializado en
              restauración, reparación, retapizado y fabricación de muebles.
            </p>

            <p>
              Desde nuestros inicios hemos mantenido el compromiso de entregar
              trabajos personalizados, cuidando cada detalle de la madera,
              tapicería y terminaciones.
            </p>

            <p>
              Cada mueble representa una historia y nuestro objetivo es
              recuperar su belleza original utilizando técnicas artesanales
              y materiales de alta calidad.
            </p>
          </div>
        </Container>
      </section>

      <section className="nosotros-taller">
        <Container>
          <div className="taller-grid">
            <div className="taller-imagen">
              <img
                src={assetPath("/images-webp/nosotros/taller.webp")}
                alt="Taller Muebles Finos JR"
              />
            </div>

            <div className="taller-texto">
              <span>MUEBLES FINOS JR</span>

              <h2>Nuestro Taller</h2>

              <p>
                En nuestro taller cada mueble es trabajado con dedicación,
                experiencia y cuidado artesanal.
              </p>

              <p>
                Combinamos técnicas tradicionales de restauración con
                materiales de calidad para devolver vida a muebles con historia.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
