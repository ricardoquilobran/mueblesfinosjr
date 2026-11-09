import { Helmet } from "react-helmet-async";


export default function SEO({

  title,

  description,

  image,

  url,

  schemaData

}) {


  const sitio =
  "https://mueblesfinosjr.cl";



  const pagina =
  `${sitio}${url}`;



  const imagen =

    image

    ? `${sitio}${image}`

    : `${sitio}/images-webp/logo/logo.webp`;





  const schema = {


    "@context":"https://schema.org",


    "@type":"Service",



    "name":

    title,



    "description":

    description,



    "url":

    pagina,



    "image":

    imagen,



    "provider":{


      "@type":"LocalBusiness",


      "name":

      "Muebles Finos JR",


      "url":

      sitio,



      "telephone":

      "+56986815967",



      "image":

      `${sitio}/images-webp/logo/logo.webp`,



      "address":{


        "@type":"PostalAddress",


        "addressLocality":

        "Maipú",


        "addressRegion":

        "Región Metropolitana",


        "addressCountry":

        "CL"


      },



      "areaServed":[


        {
          "@type":"City",
          "name":"Maipú"
        },


        {
          "@type":"City",
          "name":"Santiago"
        },


        {
          "@type":"City",
          "name":"Providencia"
        },


        {
          "@type":"City",
          "name":"Las Condes"
        },


        {
          "@type":"City",
          "name":"Ñuñoa"
        },


        {
          "@type":"City",
          "name":"Vitacura"
        }


      ]

    }



  };





  return (

    <Helmet>


      <title>
        {title}
      </title>




      <meta

        name="description"

        content={description}

      />





      <link

        rel="canonical"

        href={pagina}

      />





      <script

        type="application/ld+json"

      >

        {JSON.stringify(schema)}

      </script>






      <meta

        property="og:type"

        content="website"

      />




      <meta

        property="og:title"

        content={title}

      />




      <meta

        property="og:description"

        content={description}

      />




      <meta

        property="og:image"

        content={imagen}

      />




      <meta

        property="og:url"

        content={pagina}

      />







      <meta

        name="twitter:card"

        content="summary_large_image"

      />




      <meta

        name="twitter:title"

        content={title}

      />




      <meta

        name="twitter:description"

        content={description}

      />




      <meta

        name="twitter:image"

        content={imagen}

      />



    </Helmet>

  );

}