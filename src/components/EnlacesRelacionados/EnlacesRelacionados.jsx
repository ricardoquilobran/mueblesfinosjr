import "./EnlacesRelacionados.css";

import { Link } from "react-router-dom";



export default function EnlacesRelacionados({

enlaces=[]

}) {



console.log(
  "ENLACES RELACIONADOS DETALLE:",
  JSON.stringify(
    enlaces.map(item=>({
      titulo:item.titulo,
      slug:item.slug
    })),
    null,
    2
  )
);

if(!enlaces || enlaces.length === 0){


return null;


}





return (

<section className="enlaces-relacionados">


<div className="enlaces-relacionados-container">


<h2>
Servicios relacionados
</h2>



<p>
Conoce otros trabajos que realizamos en Muebles Finos JR.
</p>





<div className="enlaces-relacionados-grid">


{

enlaces.map((item,index)=>(


<Link


key={`${item.slug}-${index}`}


to={`/${item.slug}`}


className="enlace-relacionado"


>


{item.titulo}



</Link>



))


}




</div>



</div>



</section>


);


}