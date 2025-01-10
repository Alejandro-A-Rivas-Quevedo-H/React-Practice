import React, { useState } from 'react';
import { GuardarEnStorage } from './helpers/GuardarEnStorage';

 export const Crear = ({setListadoState}) => {


    const tituloComponente = "Añadir pelicula";
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;
    
    const conseguirDatosForm = e => {
        e.preventDefault();

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value; 

        // Crear objeto de la película a guardar
        let peli = {
            id: new Date().getTime(), // Llamar correctamente el método getTime()
            titulo, 
            descripcion
        };

        setPeliState(peli); // Actualizar el estado con la nueva película


        // actualizar estado del listado principal

        setListadoState(elementos => {
            return[peli, ...elementos]
        })

        
        // guardar en el almacenamiento local

        GuardarEnStorage("pelis", peli)


    };

    
    
    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
            {(titulo && descripcion )  && "has creado la pelicula: "+titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}> 
                <input 
                    type="text"
                    id="titulo" 
                    name="titulo"
                    placeholder="Titulo"
                />
                <textarea 
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción"
                ></textarea>

                <input 
                    type="submit"
                    id="save" 
                    value="Guardar"
                />
            </form>
        </div>
    );
};

export default Crear;
