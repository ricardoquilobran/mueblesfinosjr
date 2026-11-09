import PageHero from "../components/PageHero/PageHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import FeatureGrid from "../components/FeatureGrid/FeatureGrid";
import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import ProcesoServicio from "../components/ProcesoServicio/ProcesoServicio";

import mueblesEstilo from "../data/mueblesEstilo";

export default function MueblesEstilo() {
  return (
    <>
      <PageHero
        titulo={mueblesEstilo.hero.titulo}
        subtitulo={mueblesEstilo.hero.subtitulo}
        imagen={mueblesEstilo.hero.imagen}
      />

      <section className="page-section">
        <Container>
          <SectionTitle
            titulo={mueblesEstilo.introduccion.titulo}
            descripcion={mueblesEstilo.introduccion.texto}
          />

          <SectionTitle
            titulo="Nuestra Especialidad"
            descripcion="Fabricamos y trabajamos muebles inspirados en estilos clásicos, conservando sus proporciones, detalles y técnicas tradicionales."
          />

          <FeatureGrid items={mueblesEstilo.muebles} />
        </Container>
      </section>

      <ProcesoServicio
        subtitulo="Tradición y oficio"
        titulo="Creación de Muebles de Estilo"
        descripcion="Cada pieza nace de un proceso artesanal donde el diseño, la madera y las terminaciones se trabajan cuidadosamente."
        pasos={mueblesEstilo.proceso}
      />

      <CTA
        titulo={mueblesEstilo.cta.titulo}
        texto={mueblesEstilo.cta.texto}
        boton={mueblesEstilo.cta.boton}
        enlace={mueblesEstilo.cta.enlace}
      />
    </>
  );
}
