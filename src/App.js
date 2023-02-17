import "./App.css";
import FreeCodeCampLogo from "./img/FreeCodeCamp_logo.png"

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
        
      </div>
    </div>
  );
}

export default App;
