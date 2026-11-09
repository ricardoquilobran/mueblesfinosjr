import { useState } from "react";


import PageHero from "../PageHero/PageHero";

import SectionTitle from "../SectionTitle/SectionTitle";

import Container from "../Container/Container";

import CTA from "../CTA/CTA";

import ProcesoServicio from "../ProcesoServicio/ProcesoServicio";

import GalleryGrid from "../GalleryGrid/GalleryGrid";

import EnlacesRelacionados from "../EnlacesRelacionados/EnlacesRelacionados";



export default function ServicioPage({data}){


  const [indice,setIndice] = useState(0);



  return (

    <>



      <PageHero

        titulo={data.hero.titulo}

        subtitulo={data.hero.subtitulo}

        imagen={data.hero.imagen}

      />





      <section className="page-section">


        <Container>




          <SectionTitle

            titulo={data.introduccion.titulo}

            descripcion={data.introduccion.texto}

          />







          {
            data.muebles?.length > 0 &&

            <>


              <SectionTitle

                secundario

                titulo="Proyectos de restauración y renovación"

                descripcion="Conoce algunos muebles recuperados por nuestro taller y el proceso artesanal aplicado en cada trabajo."

              />




              <GalleryGrid

                imagenes={data.muebles}

                indice={indice}

                setIndice={setIndice}

              />



            </>

          }






        </Container>


      </section>







      <ProcesoServicio


        subtitulo={data.proceso.subtitulo}

        titulo={data.proceso.titulo}

        descripcion={data.proceso.descripcion}

        pasos={data.proceso.pasos}


      />








      <EnlacesRelacionados

        enlaces={data.enlaces}

      />








      <CTA


        titulo={data.cta.titulo}

        texto={data.cta.texto}

        boton={data.cta.boton}

        enlace={data.cta.enlace}


      />





    </>


  );


}