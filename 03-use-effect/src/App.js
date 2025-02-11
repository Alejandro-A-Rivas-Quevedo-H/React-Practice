import logo from './logo.svg';
import './App.css';
import PruebaComponent from './components/pruebaComponent';
import AjaxComponent from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PruebaComponent />
        <AjaxComponent />
      </header>
    </div>
  );
}

export default App;
