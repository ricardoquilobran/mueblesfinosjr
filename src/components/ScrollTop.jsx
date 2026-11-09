import { useEffect, useState } from "react";

function ScrollTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const mostrarBoton = () => {

      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };

    window.addEventListener("scroll", mostrarBoton);

    return () => window.removeEventListener("scroll", mostrarBoton);

  }, []);

  const subir = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };

  return (

    <button
      className={`scroll-top ${visible ? "visible" : ""}`}
      onClick={subir}
      aria-label="Volver arriba"
    >
      ↑
    </button>

  );

}

export default ScrollTop;