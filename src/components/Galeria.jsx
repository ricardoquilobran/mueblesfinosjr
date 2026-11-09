import useReveal from "../hooks/useReveal";

import { useEffect, useMemo, useState } from "react";

import fabricacion from "../data/fabricacion";
import restauracion from "../data/restauracion";
import retapizado from "../data/retapizado";
import taller from "../data/taller";

function mezclar(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function obtenerSeis(lista) {
  return mezclar(lista).slice(0, 6);
}

export default function Galeria() {
    const reveal = useReveal();

  const categorias = useMemo(() => ({

    fabricacion: [
      ...fabricacion.banqueta,
      ...fabricacion.mesa,
      ...fabricacion.silla,
      ...fabricacion.sitial,
      ...fabricacion.sofa
    ],

    restauracion,

    retapizado,

    taller

  }), []);

  const [categoria, setCategoria] = useState("fabricacion");

  const [imagenes, setImagenes] = useState(
    obtenerSeis(categorias.fabricacion)
  );

  useEffect(() => {

    setImagenes(
      obtenerSeis(categorias[categoria])
    );

    const intervalo = setInterval(() => {

      setImagenes(
        obtenerSeis(categorias[categoria])
      );

    },5000);

    return ()=>clearInterval(intervalo);

  },[categoria,categorias]);

  return(

<section
  ref={reveal}
  className="galeria reveal"
  id="galeria"
>

<div className="container">

<h2>Nuestros Trabajos</h2>

<div className="filtros">

<button
className={categoria==="fabricacion"?"activo":""}
onClick={()=>setCategoria("fabricacion")}
>

Fabricación

</button>

<button
className={categoria==="restauracion"?"activo":""}
onClick={()=>setCategoria("restauracion")}
>

Restauración

</button>

<button
className={categoria==="retapizado"?"activo":""}
onClick={()=>setCategoria("retapizado")}
>

Retapizado

</button>

<button
className={categoria==="taller"?"activo":""}
onClick={()=>setCategoria("taller")}
>

Nuestro Taller

</button>

</div>

<div className="galeria-grid">

{

imagenes.map((foto)=>(

<div
className="foto"
key={foto.id+foto.imagen}
>

<img
src={foto.imagen}
alt={foto.titulo}
/>

</div>

))

}

</div>

</div>

</section>

  );

}