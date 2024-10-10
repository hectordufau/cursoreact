import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useState } from "react";
import useTableorForm from "./useTableorForm";

const useClientes = () => {
    const repo: ClienteRepositorio = new ColecaoCliente();

    const { tableVisivel, exibirForm, exibirTable } = useTableorForm()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);
    const [clientes, setClientes] = useState<Cliente[]>([]);

    const selecionarCliente = (cliente: Cliente) => {
        setCliente(cliente);
        exibirForm();
    };

    const excluirCliente = (cliente: Cliente) => {
        repo.excluir(cliente);
        obterTodos();
        exibirTable();
    };

    const salvarCliente = async (cliente: Cliente) => {
        await repo.salvar(cliente);
        obterTodos();
        exibirTable();
    };

    const novoCliente = () => {
        setCliente(Cliente.vazio);
        exibirForm();
    };

    const obterTodos = () =>
        repo.obterTodos().then((clientes) => {
            setClientes(clientes);
        });

    return { salvarCliente, novoCliente, excluirCliente, selecionarCliente, obterTodos, cliente, clientes, tableVisivel, exibirTable }
}

export default useClientes