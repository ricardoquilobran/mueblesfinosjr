import categorias from "../data/categorias";

function Categorias({ categoriaActiva, setCategoriaActiva }) {
  return (
    <section className="categorias">
      <div className="container">

        <h2>Nuestros Trabajos</h2>

        <div className="categorias-grid">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              className={
                categoriaActiva === categoria.id
                  ? "categoria activa"
                  : "categoria"
              }
              onClick={() => setCategoriaActiva(categoria.id)}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categorias;