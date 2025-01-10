import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import EventosComponentes from './EventosComponentes';

function App() {

  const ficha_medica = {
    altura : "1.73",
    peso : "70",
    sangre: "OH +",
    alergia : "ninguna"
  }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Bienvenido al master de react
                </p>

                <div className='componentes'>
                    <hr/> 
                    <EventosComponentes/>
                    <hr/>
                    <TercerComponente 
                    nombre="Alejandro" 
                    apellidos="Rivas"
                    ficha={ficha_medica}
                    />
                    <hr />
                    <MiComponente />
                    <hr />
                    <SegundoComponente />
                </div>
            </header>
        </div>
    );
}

export default App;
