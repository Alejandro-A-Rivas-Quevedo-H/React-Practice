import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";
import { useState } from "react";

function App() {
    const [listadoState, setListadoState] = useState([])

  return (
    <div className="layout">
    {/*Cabecera*/}
    <header className="header">
        <div className="logo">

            <div className="play"></div>
        </div>
        <h1>mis peliculas</h1>
    </header>

    {/*navbar*/}

    <nav className="nav">
        <ul>
            <li><a href="/#">Inicio</a></li>
            <li><a href="/#">Peliculas</a></li>
            <li><a href="/#">Blog</a></li>
            <li><a href="/#">Conctato</a></li>

        </ul>
    </nav>

    <section id ="content" className="content">
        {/*aqui van las peliculas*/}
    <Listado listadoState={listadoState} setListadoState={setListadoState}/>

    </section>

    {/* barra lateral */}


    <aside className="lateral">
      <Buscador listadoState={listadoState}  setListadoState={setListadoState}/>

      
      <Crear listadoState={listadoState} setListadoState={setListadoState}/>  
    
    </aside>

    {/*pie de pagina*/}
    <footer className="footer">
        &copy; Master en javascript es12 y typescript - <a href="#"></a>
    </footer>
</div>
  );
}

export default App;
