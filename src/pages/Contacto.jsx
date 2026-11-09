import PageHero from "../components/PageHero/PageHero";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Container from "../components/Container/Container";
import CTA from "../components/CTA/CTA";

import contacto from "../data/contacto";

import "./Contacto.css";

export default function Contacto() {
  return (
    <>
      <PageHero
        titulo={contacto.hero.titulo}
        subtitulo={contacto.hero.subtitulo}
        imagen={contacto.hero.imagen}
      />

      <section className="page-section">

        <Container>

          <SectionTitle
            titulo="Hablemos de tu proyecto"
            descripcion="Si deseas restaurar, retapizar o fabricar un mueble, estaremos encantados de ayudarte. Puedes comunicarte con nosotros mediante cualquiera de nuestros canales de atención."
          />

          <div className="contact-grid">

            <div className="contact-card">

              <h3>Teléfono</h3>

              <p>{contacto.informacion.telefono}</p>

            </div>

            <div className="contact-card">

              <h3>Correo</h3>

              <p>{contacto.informacion.correo}</p>

            </div>

            <div className="contact-card">

              <h3>Horario</h3>

              <p>{contacto.informacion.horario}</p>

            </div>

            <div className="contact-card">

              <h3>Cobertura</h3>

              <p>{contacto.informacion.cobertura}</p>

            </div>

          </div>

          <SectionTitle
            titulo="Preguntas Frecuentes"
            descripcion="Estas son algunas de las consultas que recibimos con mayor frecuencia."
          />

          <section className="faq-lista">

            {contacto.faq.map((item, index) => (

              <article
                key={index}
                className="faq-bloque"
              >

                <h3>{item.pregunta}</h3>

                <p>{item.respuesta}</p>

              </article>

            ))}

          </section>

        </Container>

      </section>

      <CTA
        titulo={contacto.cta.titulo}
        texto={contacto.cta.texto}
        boton={contacto.cta.boton}
        enlace={contacto.cta.enlace}
      />

    </>
  );
}
