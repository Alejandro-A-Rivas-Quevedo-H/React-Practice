import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Inicio from "../components/Inicio";
import Contacto from "../components/Contacto";
import Articulos from "../components/Articulos";
import Error from "../components/Error";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />

      <h2>Menu</h2>
      <hr />

      <section class="contenido-principal"></section>

      {/* Add the Links here */}
      {/* Aqui se carga el componente que coincide con el path */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="*" element={<Error />} />
      </Routes>


      <hr />

      <footer>Este es el pie de pagina</footer>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
