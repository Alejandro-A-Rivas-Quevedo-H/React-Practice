import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Persona = () => {
  const { nombre, apellido } = useParams();
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();

    
    const nombre = e.target.elements.nombre.value;
    const apellido = e.target.elements.apellido.value;

    const url = `/persona/${nombre}/${apellido}`;

    if(nombre.length <= 0 && apellido.length <= 0) {
      navegar('/inicio');
    } else if (nombre === "contacto") {
      navegar('/contacto');
    } else {
      navegar(url);
    }
    
  };

  return (
    <div>
      {!nombre && !apellido ? (
        <h1>No hay ninguna persona que mostrar</h1>
      ) : (
        <h1>Página de Persona: {nombre} {apellido}</h1>
      )}
      <p>Esta es la página de persona</p>

      <form onSubmit={enviar}>
        <input type="text" name="nombre" placeholder="Nombre" required />
        <input type="text" name="apellido" placeholder="Apellido" required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Persona;
