import PageHero from "../components/PageHero/PageHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import FeatureGrid from "../components/FeatureGrid/FeatureGrid";
import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import ProcesoServicio from "../components/ProcesoServicio/ProcesoServicio";

import retapizado from "../data/retapizado";

export default function Retapizado() {
  return (
    <>
      <PageHero
        titulo={retapizado.hero.titulo}
        subtitulo={retapizado.hero.subtitulo}
        imagen={retapizado.hero.imagen}
      />

      <section className="page-section">
        <Container>
          <SectionTitle
            titulo={retapizado.introduccion.titulo}
            descripcion={retapizado.introduccion.texto}
          />

          <SectionTitle
            titulo="¿Qué retapizamos?"
            descripcion="Renovamos muebles tapizados recuperando su comodidad, estructura y presencia, cuidando cada detalle desde el interior hasta la terminación final."
          />

          <FeatureGrid items={retapizado.muebles} />
        </Container>
      </section>

      <ProcesoServicio
        subtitulo="Nuestro método de trabajo"
        titulo="Proceso de Retapizado"
        descripcion="Evaluamos cada mueble de forma individual para renovar sus materiales, recuperar su comodidad y conservar la esencia de su diseño."
        pasos={retapizado.proceso}
      />

      <CTA
        titulo={retapizado.cta.titulo}
        texto={retapizado.cta.texto}
        boton={retapizado.cta.boton}
        enlace={retapizado.cta.enlace}
      />
    </>
  );
}
