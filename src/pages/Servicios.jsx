import ServiciosIndex from "../components/ServiciosIndex/ServiciosIndex";
import SEO from "../components/SEO/SEO";

export default function Servicios() {
  return (
    <>
      <SEO
        title="Todos nuestros servicios | Muebles Finos JR"
        description="Conoce todos los servicios de restauración, retapizado, barnizado y fabricación de muebles que realizamos en la Región Metropolitana."
        image="/images-webp/restauracion/portada.webp"
        url="/servicios"
      />

      <ServiciosIndex />
    </>
  );
}
