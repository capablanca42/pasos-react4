
import React, { useState } from 'react';
import './App.css';
import Saludo from './Saludo';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <h1>Mi primera App React</h1>
      <Saludo nombre="Jandry" />

      <p>Contador actual: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}

export default App;
