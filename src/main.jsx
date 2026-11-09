import "./data/seo/auditoriaSEOv2";
import "./data/seo/auditoriaSEOv3";
import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter
} from "react-router-dom";


import App from "./App";


import "./index.css";



// =====================================
// SEO DINÁMICO
// =====================================

import paginasSEO from "./data/seo/crearPaginasSEOv3";


// Auditor SEO
import auditorSEO from "./data/seo/auditorSEO";





// =====================================
// VALIDACIÓN DESARROLLO
// =====================================


console.log(
  "TOTAL PAGINAS SEO:",
  paginasSEO.length
);





if (import.meta.env.DEV) {


  auditorSEO(
    paginasSEO
  );


}







ReactDOM.createRoot(

  document.getElementById("root")

)

.render(

  <React.StrictMode>


    <BrowserRouter basename={import.meta.env.BASE_URL}>
  <App />
</BrowserRouter>


  </React.StrictMode>

);