import React from 'react'
import { Outlet } from 'react-router-dom'

const PanelControl = () => {
  return (
    <div>
    <h1>Panel de Control</h1>
    <p>Elige una de estas opciones</p>
    <nav>
        <li>
            <a href="/panel/inicio">Inicio</a>
        </li>
        <li>
            <a href="/panel/crear-articulos">Crear Articulo</a>
        </li>
        <li>
            <a href="/panel/gestion-de-usuarios">Gestion de usuarios</a>
        </li>
        <li>
            <a href="/panel/acerca-de">Acerca de</a>
        </li>
    </nav>
    <div>
     {/* quiero cargar aqui los componentes de las subrutas anidadas*/}
     <Outlet/>
  </div>
  </div>
  )
}

export default PanelControl
