import React from "react";
import { Routes, Route, NavLink, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../components/Inicio";
import Contacto from "../components/Contacto";
import Articulos from "../components/Articulos";
import Persona from "../components/Persona";
import Error from "../components/Error";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "activado" : "";
              }}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => {
                return isActive ? "activado" : "";
              }}
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articulos"
              className={({ isActive }) => {
                return isActive ? "activado" : "";
              }}
            >
              Articulos
            </NavLink>
          </li>
        </ul>
      </nav>

      <h2>Menu</h2>
      <hr />

      <section className="contenido-principal"></section>

      {/* Add the Links here */}
      {/* Aqui se carga el componente que coincide con el path */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/persona/:nombre?/:apellido?" element={<Persona />} />
        <Route path="/redirigir" element={<Navigate to="/persona/alejandro/rivas" />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <hr />

      <footer>Este es el pie de pagina</footer>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
