import React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <h2>Sacar turno</h2>
          <form>
          <label>Nombre Mascota</label>
          <input type="text" name="mascota" className="u-full-width"
              placeholder="Nombre Mascota" value=""/>
              <br></br>
             <label>Nombre Dueño</label>
            </form>
        </div>
      </div>
    </div>
  );
}
