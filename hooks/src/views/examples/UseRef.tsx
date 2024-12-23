import { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props: any) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const count = useRef(0);
  const input1 = useRef<HTMLInputElement>(null);
  const input2 = useRef<HTMLInputElement>(null);
  useEffect(() => {
    count.current = count.current + 1;
    input2.current?.focus();
  }, [value1]);
  useEffect(() => {
    count.current = count.current + 1;
    input1.current?.focus();
  }, [value2]);

  const merge = (s1: string, s2: string) => {
    return [...s1].map((e, i) => `${e}${s2[i] || ""}`).join("");
  };

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercicio 1"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          id="input1"
          type="text"
          className="input"
          value={value1}
          onChange={(e) => {
            setValue1(e.target.value);
          }}
          ref={input1}
        />
      </div>
      <SectionTitle title="Exercicio 2"></SectionTitle>
      <div className="center">
        <input
          id="input2"
          type="text"
          className="input"
          value={value2}
          onChange={(e) => {
            setValue2(e.target.value);
          }}
          ref={input2}
        />
      </div>
    </div>
  );
};

export default UseRef;
