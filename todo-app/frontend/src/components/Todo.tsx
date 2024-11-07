import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div>
      <Header name="Tarefas" small="Cadastro"></Header>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
