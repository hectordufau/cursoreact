import { Component, ReactNode } from "react";
import Header from "./Header";

class Todo extends Component {
  render(): ReactNode {
    return (
      <div>
        <Header name='Tarefas' small='Cadastro'></Header>
      </div>
    );
  }
}

export default Todo;
