import Layout from "@/components/Layout";
import { useState } from "react";

const Integracao = () => {
  const [codigo, setCodigo] = useState(0);
  const [cliente, setCliente] = useState({ id: 0, name: "" });
  const obtercliente = async () => {
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const dados = await resp.json();
    setCliente(dados);
  };
  return (
    <Layout>
      <div>
        <div>
          <input
            type="number"
            value={codigo}
            onChange={(e) => setCodigo(parseInt(e.target.value))}
          />
          <button onClick={obtercliente}>Obter Cliente</button>
        </div>
        <ul>
          <li>Código: {cliente.id}</li>
          <li>Nome: {cliente.name}</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Integracao;
