import React,{useState} from 'react'

export const MiPrimerEstado = () => {

  /*  
  
  // problematica 

  let nombre = "Alejandro Rivas";

  const cambiarNombre = e => {
    nombre = "manolo caracol"
  }
*/

  const [nombre,setNombre] = useState("Alejandro Rivas")

  const cambiarNombre = (e,nombreFijo) => {
    setNombre(nombreFijo)
  }
  return (
    <div>
    <h3>Componente: MiPrimerEstado</h3>

    <strong className="label"> 
        {nombre}
    </strong>
    &nbsp;
    <button onClick={e => cambiarNombre(e,"Francisco")}>Cambiar nombre por fran</button>

    <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='cambiar el nombre'></input>
    </div>
  )
}

export default MiPrimerEstado;
