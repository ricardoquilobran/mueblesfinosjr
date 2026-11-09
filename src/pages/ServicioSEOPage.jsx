import { useParams } from "react-router-dom";

import NotFound from "./NotFound";

import paginasSEO from "../data/seo/crearPaginasSEOv3";

import ServicioPage from "../components/ServicioPage/ServicioPage";

import SEO from "../components/SEO/SEO";



export default function ServicioSEOPage(){


const {slug}=useParams();




const data = paginasSEO.find(

pagina => pagina.slug === slug

);





if(!data){

return <NotFound/>;

}





return (

<>


<SEO


title={data.seo.title}


description={data.seo.description}


image={data.hero.imagen}


url={`/${data.slug}`}



schemaData={{


type:"Service",


name:data.titulo,


area:"Región Metropolitana"


}}



/>



<ServicioPage

data={data}

/>



</>


);


}