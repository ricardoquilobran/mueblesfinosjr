import "./SectionTitle.css";


export default function SectionTitle({
  titulo,
  descripcion,
  secundario = false
}) {


  return (

    <header

      className={
        secundario
        ? "section-title section-title-secundario"
        : "section-title"
      }

    >


      <h2>
        {titulo}
      </h2>



      {
        descripcion &&

        <p>
          {descripcion}
        </p>

      }


    </header>

  );


}