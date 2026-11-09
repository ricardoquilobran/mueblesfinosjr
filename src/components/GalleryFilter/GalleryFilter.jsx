import "./GalleryFilter.css";

export default function GalleryFilter({
  categoria,
  setCategoria,
}) {
  const categorias = [
    "Restauración",
    "Retapizado",
    "Muebles de Estilo",
    "Antes y Después",
  ];

  return (
    <div className="gallery-filter">
      {categorias.map((item) => (
        <button
          key={item}
          type="button"
          className={categoria === item ? "activo" : ""}
          onClick={() => setCategoria(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
