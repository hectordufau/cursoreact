import { useState } from "react";
import "./Mega.css";

const Mega = (props: any) => {
  const { nqtde } = props;
  const gerarNumeroNaoContido: any = (
    min: number,
    max: number,
    array: Array<number>
  ) => {
    const aleatorio = Math.round(Math.random() * (max + 1 - min) + min);
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  };

  const gerarNumeros = (qtde: number) => {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1: number, n2: number) => n1 - n2);
    return numeros;
  };

  const [qtde, setQtde] = useState(nqtde || 6);
  const numerosIniciais = gerarNumeros(qtde);
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label htmlFor="">Qtde. de Numeros </label>
        <input
          min={6}
          max={15}
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            setNumeros(gerarNumeros(+e.target.value));
          }}
        />
      </div>
      <button onClick={() => setNumeros(gerarNumeros(qtde))}>
        Gerar Numeros
      </button>
    </div>
  );
};

export default Mega;
