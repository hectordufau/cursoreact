import { useState } from "react";
import "./Input.css";

const Input = (props: any) => {
  const [valor, setValor] = useState("Inicial");

  const quandoMudar = (e: any) => {
    setValor(e.target.value);
  };

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input value={valor} onChange={quandoMudar} />
        <input value={valor} readOnly />
        <input value={undefined} />
      </div>
    </div>
  );
};

export default Input;
