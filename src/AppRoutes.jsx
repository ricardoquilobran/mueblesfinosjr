import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Restauracion from "./pages/Restauracion";
import Retapizado from "./pages/Retapizado";
import MueblesEstilo from "./pages/MueblesEstilo";
import Galeria from "./pages/Galeria";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Servicios from "./pages/Servicios";
import ServicioSEOPage from "./pages/ServicioSEOPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/restauracion"
        element={<Restauracion />}
      />

      <Route
        path="/retapizado"
        element={<Retapizado />}
      />

      <Route
        path="/muebles-de-estilo"
        element={<MueblesEstilo />}
      />

      <Route
        path="/galeria"
        element={<Galeria />}
      />

      <Route
        path="/nosotros"
        element={<Nosotros />}
      />

      <Route
        path="/contacto"
        element={<Contacto />}
      />

      <Route
        path="/servicios"
        element={<Servicios />}
      />

      {/* Páginas SEO dinámicas */}
      <Route
        path="/:slug"
        element={<ServicioSEOPage />}
      />
    </Routes>
  );
}