import React, { useState } from "react";
import "./style.css";

export default function App() {

  const [equipo, setEquipo] = useState("ORT Belgrano");
  const [casa, setCasa] = useState("CCC");

  function actualizarEstado(){
    setEquipo("asasasa")
  }

  return (
    <div>
      <h1>Hello { equipo }!</h1>
      <p>Start editing to see some magic happen :) {casa}</p>

      <button onClick={actualizarEstado}> Cambiar Nombre de Equipo</button>
    </div>
  );
}
