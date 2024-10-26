import IconButton from "./IconButton";

const TodoList = (props: any) => {
  const renderRows = () => {
    const list: [] = props.list || [];
    return list.map((todo: any) => (
      <tr key={todo.id || 1}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td className="tableActions">
          <IconButton
            styleb="success"
            icon="check"
            onClick={() => props.handleMarkDone(todo)}
            hide={todo.done}
          />
          <IconButton
            styleb="warning"
            icon="undo"
            onClick={() => props.handleMarkPending(todo)}
            hide={!todo.done}
          />
          <IconButton
            styleb="danger"
            icon="trash"
            onClick={() => props.handleRemove(todo)}
            hide={!todo.done}
          />
        </td>
      </tr>
    ));
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th className="tableActions">Ações</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default TodoList;
