import { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const calcFatorial: any = (n: number) => {
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
};

const tipoNumero: any = (n: number) => {
  return n % 2 === 0 ? "Par" : "Ímpar";
};

const UseEffect = (props: any) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [tipo, setTipo] = useState("");

  useEffect(() => {
    setFatorial(calcFatorial(number));
  }, [number]);

  useEffect(() => {
    setTipo(tipoNumero(number));
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício 1"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(+e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício 2"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{tipo}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
