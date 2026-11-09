import { useMemo, useState, useEffect } from "react";

import PageHero from "../components/PageHero/PageHero";
import Container from "../components/Container/Container";
import SectionTitle from "../components/SectionTitle/SectionTitle";

import GalleryFilter from "../components/GalleryFilter/GalleryFilter";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";

import galeria from "../data/galeria";

export default function Galeria() {

  const [categoria, setCategoria] = useState("Restauración");

  const [indice, setIndice] = useState(0);

  const imagenes = useMemo(() => {

    return galeria.filter(
      (img) => img.categoria === categoria
    );

  }, [categoria]);

  useEffect(() => {

    setIndice(0);

  }, [categoria]);

  return (
    <>

      <PageHero
        titulo="Galería"
        subtitulo="Una selección de trabajos realizados en nuestro taller."
      />

      <section className="page-section">

        <Container>

          <SectionTitle
            titulo="Nuestros Trabajos"
            descripcion="Selecciona un servicio y descubre algunos de nuestros trabajos."
          />

          <GalleryFilter
            categoria={categoria}
            setCategoria={setCategoria}
          />

          <GalleryGrid
            imagenes={imagenes}
            indice={indice}
            setIndice={setIndice}
          />

        </Container>

      </section>

    </>
  );
}
