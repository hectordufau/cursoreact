import axios from "axios";
import { Component, ReactNode } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const URL = "http://localhost:3003/todos";

class Todo extends Component<{}, { description: string; list: Array<{}> }> {
  state = { description: "", list: [{}] };
  _isMounted = false;

  constructor(props: any) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkDone = this.handleMarkDone.bind(this);
    this.handleMarkPending = this.handleMarkPending.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.refresh();
  }

  refresh = (description: string = "") => {
    const search = description ? `?description=${description}` : "";
    axios.get(`${URL}${search}`).then((resp: any) => {
      if (this._isMounted) {
        this.setState({ ...this.state, description, list: resp.data.data });
      }
    });
  };

  handleAdd = () => {
    const description = this.state.description;
    axios.post(URL, { description }).then((resp: any) => this.refresh());
  };

  handleRemove = (todo: any) => {
    axios
      .delete(`${URL}/${todo.id}`)
      .then((resp: any) => this.refresh(this.state.description));
  };

  handleChange = (e: any) => {
    this.setState({ ...this.state, description: e.target.value });
  };

  handleMarkDone = (todo: any) => {
    axios
      .put(`${URL}/${todo.id}`, { done: true })
      .then((resp: any) => this.refresh(this.state.description))
      .catch((error: any) => console.log(error));
  };

  handleMarkPending = (todo: any) => {
    axios
      .put(`${URL}/${todo.id}`, { done: false })
      .then((resp: any) => this.refresh(this.state.description))
      .catch((error: any) => console.log(error));
  };

  handleSearch = () => {
    console.log(this.state.description);
    this.refresh(this.state.description);
  };

  handleClear = () => {
    this.refresh();
  };

  render(): ReactNode {
    return (
      <div>
        <Header name="Tarefas" small="Cadastro"></Header>
        <TodoForm
          handleAdd={this.handleAdd}
          description={this.state.description}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
        />
        <TodoList
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkDone={this.handleMarkDone}
          handleMarkPending={this.handleMarkPending}
        />
      </div>
    );
  }
}

export default Todo;
