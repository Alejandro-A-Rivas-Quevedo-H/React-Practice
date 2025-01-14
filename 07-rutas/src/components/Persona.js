import React from 'react'
import { useParams } from 'react-router-dom'

const Persona = () => {


    const {nombre, apellido} = useParams();


  return (
    <div>
      {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
      <h1>pagina de Persona : {nombre} {apellido}</h1>
      <p>esta es la pagina de persona</p>
    </div>
  )
}

export default Persona