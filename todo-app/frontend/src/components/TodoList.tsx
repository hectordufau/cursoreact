import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "../store/todoActions";
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
            onClick={() => props.markAsDone(todo)}
            hide={todo.done}
          />
          <IconButton
            styleb="warning"
            icon="undo"
            onClick={() => props.markAsPending(todo)}
            hide={!todo.done}
          />
          <IconButton
            styleb="danger"
            icon="trash"
            onClick={() => props.remove(todo)}
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

const mapStateToProps = (state: any) => ({ list: state.todo.list });
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
