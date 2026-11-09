
import Hero from "../components/Hero/Hero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ServiceCard from "../components/ServiceCard/ServiceCard";

import { assetPath } from "../utils/assetPath";

import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="home-services">
        <div className="container">

          <SectionTitle
            titulo="Nuestras Especialidades"
            descripcion="Desde pequeñas reparaciones hasta restauraciones completas, cada trabajo se realiza cuidadosamente para recuperar la belleza, funcionalidad y valor de muebles clásicos, antiguos y de estilo."
          />

          <div className="services-grid">

            <ServiceCard
              titulo="Restauración"
              descripcion="Recuperamos mesas, sillas y muebles antiguos respetando su historia, estructura y terminaciones originales."
              imagen={assetPath("/images-webp/restauracion/portada.webp")}
              enlace="/restauracion"
              boton="Ver restauraciones"
            />

            <ServiceCard
              titulo="Retapizado"
              descripcion="Retapizamos sillas, sofás y sitiales utilizando espumas de alta densidad, telas de calidad y terminaciones profesionales."
              imagen={assetPath("/images-webp/retapizado/portada.webp")}
              enlace="/retapizado"
              boton="Ver retapizados"
            />

            <ServiceCard
              titulo="Muebles de Estilo"
              descripcion="Seleccionamos muebles de madera en bruto, los restauramos y los ofrecemos completamente terminados y listos para su hogar."
              imagen={assetPath("/images-webp/muebles-estilo/portada-v2.webp")}
              enlace="/muebles-de-estilo"
              boton="Ver colección"
            />

          </div>

        </div>
      </section>

    </>
  );
}
