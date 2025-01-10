import React from "react";

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar"

    const guardarEdicion = (e, id) => {
        e.preventDefault()
        alert(id)

        //conseguir el target del evento 

        let target = e.target  

        // buscar el  indice del objeto de la pelicula a actualizar 

        let pelis_almacenadas = conseguirPeliculas()
        const indice = pelis_almacenadas.findIndex(peli => id === id)

        // crear objeto con ese indice 

        let peli_actualiza = {
          id, 
          titulo: target.titulo.value,
          descripcion: target.descripcion.value
        }
        /// actualizar el elemento con ese indice 

        pelis_almacenadas[indice] = peli_actualiza; 
        console.log(pelis_almacenadas)

        // guardar el nuevo array de objetos en el localstorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas))

        // actualizar estados 
        setListadoState(pelis_almacenadas)
        setEditar(0)
    }

  return (
    <div className='edit_form'>
        <h3 className="title">{titulo_componente}</h3>
    <form onSubmit={ e => guardarEdicion(e, peli.id)}> 
        <input type="text"
                name="titulo"
                className="titulo_editado"
                defaultValue={peli.titulo}/>

        <textarea
                name="descripcion"
                defaultValue={peli.descripcion}
                className="descripcion_editada" />

        <input type="submit" className="editar" value="Actualizar"/>
    </form>
    </div>
  )
}

