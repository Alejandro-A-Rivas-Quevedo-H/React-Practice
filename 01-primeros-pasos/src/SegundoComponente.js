import React from 'react';

const SegundoComponente = () => {
    const libros = ["Harry Potter", "Señor de los anillos", "Juego de tronos"];

    return (
        <div className='segundo-componente'>
            <h2>Listados de libros</h2>
            {libros.length >= 1 ? (
            <ul>
                {libros.map((libro, indice) => {
                    return <li key={indice}>{libro}</li>;
                })}
            </ul> )
            : (
            <p>No hay libros</p>
            )} 
        </div>
    );
};

export default SegundoComponente;

