import React, {useState, useEffect} from 'react';
import Aviso from './Aviso';

const PruebaComponent = () => {

    const [usuario,setUsuario] = useState("Alejandro")
    const [fecha, setFecha] = useState("21-07-2000")
    const[contador, setContador] = useState(0)

    const modUsuario = e => {
        setUsuario(e.target.value)
    }

    const cambiarFecha = e => {
      setFecha(new Date(). toLocaleDateString())
  }

    useEffect(() =>{
    console.log("has cargado el componente")
    })

    useEffect(() =>{
      console.log("has cargado el componente")

      setContador(contador+1)
      console.log("has cargado el componente: "+contador)

      },[usuario])


  return (
    <div>
      <h2>El efecto - useEffect</h2>

      <strong>{usuario}</strong>

      <br></br>
      <strong>{fecha}</strong>
     
     <p>
     <input type="text" 
            onChange={modUsuario}
            placeholder='cambia el nombre'/>
      <button onClick = {cambiarFecha}>Cambiar Fecha</button>
     </p>

   
    {contador >= 20 && <Aviso />}
    </div>
  );
};

export default PruebaComponent;
