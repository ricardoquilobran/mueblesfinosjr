import { Helmet } from "react-helmet-async";


export default function Schema({

  servicio,

  objeto,

  ciudad,

  image,

  url,

}) {


  const sitio =
  "https://mueblesfinosjr.cl";



  const nombreServicio =

    `${servicio} de ${objeto} en ${ciudad}`;





  const schema = {


    "@context":"https://schema.org",



    "@type":"Service",



    "name":

    nombreServicio,



    "serviceType":

    nombreServicio,



    "description":

    `Servicio profesional de ${servicio.toLowerCase()} de ${objeto.toLowerCase()} realizado por Muebles Finos JR en ${ciudad}, Santiago de Chile.`,



    "areaServed":{


      "@type":"City",


      "name":

      ciudad


    },



    "provider":{


      "@type":"LocalBusiness",



      "name":

      "Muebles Finos JR",



      "url":

      sitio,



      "telephone":

      "+56986815967",



      "image":

      `${sitio}${image}`,



      "address":{


        "@type":"PostalAddress",


        "addressLocality":

        "Maipú",


        "addressRegion":

        "Región Metropolitana",


        "addressCountry":

        "CL"


      },



      "areaServed":{


        "@type":"AdministrativeArea",


        "name":

        "Región Metropolitana de Santiago"


      }



    },



    "url":

    `${sitio}${url}`



  };





  return (

    <Helmet>


      <script

        type="application/ld+json"

      >

        {JSON.stringify(schema)}

      </script>



    </Helmet>

  );


}