import React, { useState, useEffect } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Función para obtener usuarios estáticos
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      },
      {
        id: 2,
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      {
        id: 3,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
      },
      {
        id: 4,
        email: "eve.holt@reqres.in",
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://reqres.in/img/faces/4-image.jpg",
      },
    ]);
    setCargando(false); // Deja de cargar una vez que los datos se han establecido
  };

  // hook useEffect para cargar usuarios estáticos al montar el componente
  useEffect(() => {
    getUsuariosEstaticos();
  }, []);

  // Función para obtener usuarios con fetch (con promesas)
  const getUsuariosAjaxpms = () => {
    setCargando(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then(({ data }) => {
        setUsuarios(data);
        setCargando(false); // Detenemos el estado de carga al obtener los datos
      })
      .catch((error) => {
        console.error(error);
        setCargando(false); // Asegurarse de detener la carga en caso de error
      });
  };

  // Función para obtener usuarios con fetch (con async/await)
  const getUsuariosAjaxAW = async () => {
    setCargando(true);
    try {
      const peticion = await fetch("https://reqres.in/api/users?page=1");
      const { data } = await peticion.json();
      setUsuarios(data);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false); // Detenemos el estado de carga cuando finaliza la petición
    }
  };

  // Muestra un mensaje mientras los datos están cargando
  if (cargando) {
    return (
      <div className="cargando">
        <p>Cargando datos...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Listado de usuarios via ajax</h2>
      <button onClick={getUsuariosAjaxpms}>Cargar usuarios (Promesas)</button>
      <button onClick={getUsuariosAjaxAW}>Cargar usuarios (Async/Await)</button>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <img src={usuario.avatar} alt={usuario.first_name} width="50" />
            <p>
              {usuario.first_name} {usuario.last_name}
            </p>
            <p>Email: {usuario.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AjaxComponent;
