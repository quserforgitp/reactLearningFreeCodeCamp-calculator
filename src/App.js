import "./App.css";
import FreeCodeCampLogo from "./img/FreeCodeCamp_logo.png"
import Boton from "./components/Boton";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={FreeCodeCampLogo}
          className="freecodecamp-logo"
          alt="logo de FreeCodeCamp" />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
