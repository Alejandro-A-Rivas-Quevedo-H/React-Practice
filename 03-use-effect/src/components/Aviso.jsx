import React, { useEffect } from 'react'

const Aviso = () => {
    
    useEffect (() =>{
        // cuando el componente se monta 
        alert("el componente Aviso esta montado")


        
        return () => {
            alert("componente desmontado!!!")
        }

    }, []);



  return (
    <div>
        <hr/>
        <h3>Saludos manolo</h3>

        <button onClick={e => {
            alert("bienvenido")
        }}>Mostrar Alerta</button>
    </div>
  )
}

export default Aviso
