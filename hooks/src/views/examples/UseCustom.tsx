import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseRef = (props: any) => {
  const [count, inc, dec] = useCounter(100);
  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const response = useFetch(url);
  function showStates(states: any) {
    return Object.keys(states).map((state: any) => (
      <li>
        {state.nome} - {state.sigla}
      </li>
    ));
  }
  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercicio 1"></SectionTitle>
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => inc()}>
            Inc
          </button>
          <button className="btn" onClick={() => dec()}>
            Dec
          </button>
        </div>
      </div>
      <SectionTitle title="Exercicio 2"></SectionTitle>
      <div className="center">
        <ul>{!response.loading ? showStates(response.data) : false}</ul>
      </div>
    </div>
  );
};

export default UseRef;
