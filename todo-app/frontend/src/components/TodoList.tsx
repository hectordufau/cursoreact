import IconButton from "./IconButton";

const TodoList = (props: any) => {

    const renderRows = () => {
        const list: [] = props.list || []
        return list.map((todo: any) => (
            <tr key={todo.id || 1}>
                <td>{todo.description}</td>
                <td className="text-center">
                    <IconButton styleb='success' icon='check' onClick={() => props.handleMarkDone(todo)} />
                    <IconButton styleb='danger' icon='trash' onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className="text-end">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;