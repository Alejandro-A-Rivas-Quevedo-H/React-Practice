import React, { useState } from 'react';

const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = (e) => {
    e.preventDefault();
    
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value
    };
    console.log(usuario);
    setUsuario(usuario);
  };


  const cambiarDatos = e => {

    let name_del_input = e.target.name;
    let usuario_para_modificar = usuario

    usuario_para_modificar[name_del_input] = e.target.value

    if (name_del_input === "nombre"){
    usuario_para_modificar.nombre = e.target.value
    }
    if (name_del_input === "apellido"){

    }
    if (name_del_input === "genero"){

    }
    if (name_del_input === "bio"){

    }
  }

  return (
    <div>
      <h3>Formularios en React</h3>

      { usuario.bio && usuario.bio.length >= 1 &&

      (<div className='info_usuario'>
        {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografia es esta: <p>{usuario.bio}</p>
      </div>) }

      <form onSubmit={conseguirDatosFormulario}>  
        <input type="text" placeholder="Nombre" name="nombre"  onChange={cambiarDatos}/>
        <input type="text" placeholder="Apellido" name="apellido" onChange={cambiarDatos} />
        <select name="genero" onChange={cambiarDatos}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea placeholder="Biografia" name="bio" onChange={cambiarDatos}></textarea>  

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioComponent;
