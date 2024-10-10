import Cliente from "@/core/Cliente";
import { useState } from "react";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void;
  clienteMudou?: (cliente: Cliente) => void;
}

const Formulario = (props: FormularioProps) => {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada texto="Código" valor={id} somenteLeitura></Entrada>
      ) : (
        false
      )}

      <Entrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      ></Entrada>
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
        className="mb-4"
      ></Entrada>
      <div className="mt-7 flex justify-end">
        <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
};

export default Formulario;
