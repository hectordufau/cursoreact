import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { addDoc, collection, CollectionReference, deleteDoc, doc, getDocs, QueryDocumentSnapshot, SnapshotOptions, updateDoc } from "firebase/firestore";
import db from "../config";

class ColecaoCliente implements ClienteRepositorio {

    private conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions) {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente | undefined> {
        if (cliente?.id) {
            const docRef = doc(collection(db, 'clientes'), cliente.id)
            await updateDoc(docRef, {
                nome: cliente.nome,
                idade: cliente.idade
            })
            return cliente
        } else {
            await addDoc(this.colecao(), cliente)
            return cliente
        }
    }

    async excluir(cliente: Cliente): Promise<void> {

        const docRef = await doc(collection(db, 'clientes'), cliente.id)
        await deleteDoc(docRef)
    }

    async obterTodos(): Promise<Cliente[]> {
        const query = await getDocs(this.colecao())
        return query.docs.map((doc: any) => doc.data()) ?? []
    }

    private colecao(): CollectionReference<Cliente> {
        return collection(db, 'clientes').withConverter(this.conversor)
    }

}

export default ColecaoCliente