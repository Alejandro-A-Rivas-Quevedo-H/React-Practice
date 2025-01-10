//importar modulos de react

import React from "react";

// funcion "practicamente lo que se estara trabajando"


const MiComponente = () => {

   let nombre = "Alejandro" 
   let web = "alejandro.com"
   let usuario = {
    nombre : "Alejandro",
    apellido : "Rivas",
    edad : "23",
    nacionalidad : "venezolano"
}
   
    return (
    <div className="mi-componente">


<h2>Componente creado</h2>
<h3>Datos del Usuario</h3>
<ul>
    <li><strong>{usuario.nombre}</strong></li>
    <li><strong>{usuario.web} </strong></li>
</ul>
<p>este es mi primer componente </p>
<ul> 
    <li>React</li>
    <li>Angular</li>
    <li>Vue</li>
</ul>

</div>
   
    );
};

// exportar para poder completar el componente

export default MiComponente;