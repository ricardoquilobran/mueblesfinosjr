import PageHero from "../components/PageHero/PageHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import FeatureGrid from "../components/FeatureGrid/FeatureGrid";
import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";
import ProcesoServicio from "../components/ProcesoServicio/ProcesoServicio";

import restauracion from "../data/restauracion";


export default function Restauracion() {


  return (

    <>

      <PageHero

        titulo={restauracion.hero.titulo}

        subtitulo={restauracion.hero.subtitulo}

        imagen={restauracion.hero.imagen}

      />




      <section className="page-section">


        <Container>


          <SectionTitle

            titulo={restauracion.introduccion.titulo}

            descripcion={restauracion.introduccion.texto}

          />





          <SectionTitle

            titulo={restauracion.tituloMuebles}

            descripcion={restauracion.descripcionMuebles}

          />





          <FeatureGrid

            items={restauracion.muebles}

          />



        </Container>


      </section>





      <ProcesoServicio

        subtitulo={restauracion.proceso.subtitulo}

        titulo={restauracion.proceso.titulo}

        descripcion={restauracion.proceso.descripcion}

        pasos={restauracion.proceso.pasos}

      />





      <CTA

        titulo={restauracion.cta.titulo}

        texto={restauracion.cta.texto}

        boton={restauracion.cta.boton}

        enlace={restauracion.cta.enlace}

      />



    </>

  );

}