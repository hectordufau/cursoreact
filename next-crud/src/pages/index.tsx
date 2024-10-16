import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useClientes from "@/hooks/useClientes";

export default function Home() {
  const {
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    cliente,
    clientes,
    tableVisivel,
    exibirTable,
    obterTodos,
  } = useClientes();

  obterTodos();

  return (
    <div
      className={`
    flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to bg-purple-500 text-white
  `}
    >
      <Layout titulo="Cadastro Simples">
        {tableVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>

            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTable}
          ></Formulario>
        )}
      </Layout>
    </div>
  );
}
