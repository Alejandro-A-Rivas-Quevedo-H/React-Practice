import React from 'react'

const EventosComponentes = () => {


  const hasDadoClick = (e,nombre) => {
    alert("Has dado click al boton"+nombre)
  }

  function hasDadoDobleClick(e) {
    alert("Has dado doble click al boton")
  }

  const hasEntrado = (e,accion) => {
    alert(`has ${accion} entrado a la caja con el mouse`)
  }

  const estasDentro = e => {
    alert("estas dentro del input mete tu nombre")
  }

  const estasFuera = e => {
    console.log("estas fuera del input")
  }

  return (
    <div>
      <h1>Eventos en React</h1>
      <p>

      {/* evento click */}
      <button onClick={ e => hasDadoClick(e,"Alejandro")}>Dame click</button>

      </p>

      <p>
      {/* evento doble click */}
      <button onDoubleClick={hasDadoDobleClick}>Dame doble click</button>
      </p>

      <div id="caja" 
      onMouseEnter={ e => hasEntrado(e,"entrado")}
      onMouseLeave={e => hasEntrado(e,"salido")}
      >
      {/* Evento onMouseEnter onMouseLeave */}
      pasa por encima
      </div> 

      <p>

      {/* Evento focus y blur  */}

      <input type="text" 
      onFocus={estasDentro} 
      onBlur={estasFuera}
      placeholder="Introduce tu nombre"></input>

      </p>


    </div>
  )
}

export default EventosComponentes;
