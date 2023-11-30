import logo from './logo.svg';
import './App.css';
import Message from './message';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Formulario from './componentes/formulario';
import { ComponentePrueba } from './componentes/componentePrueba';
import descarga from './assets/img/descarga.png'








function App() {
  const [Statepuerta, setStatepuerta] = useState(false);


  const abiertocerrado = () => {
    setStatepuerta(!Statepuerta);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>el seguro esta: {Statepuerta ? "abierto" : "cerrado"} </h3>
        <button onClick={abiertocerrado}>abierto / cerrado</button>
        <hr />
        <h1 className='titulo'>¡Mi formulario en React!</h1>
        <Formulario/>
        <ComponentePrueba/>

          <img src={ descarga }>
          </img>
        
        <hr />



      </header>
    </div>
  );
}






export default App;
