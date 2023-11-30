import React, { useState } from 'react';
import '../App.css'; 
const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nombre: ${nombre}, Email: ${email}`);
    setNombre('');
    setEmail('');
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="grupo">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="grupo">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grupo">
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default Formulario