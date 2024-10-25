import axios from 'axios';
import { Component, ReactNode } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from './TodoList';

const URL = 'http://localhost:3003/todos'

class Todo extends Component<{}, { description: string, list: Array<{}> }> {

  state = { description: '', list: [{}] }
  _isMounted = false

  constructor(props: any) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkDone = this.handleMarkDone.bind(this)
  }

  componentDidMount() {
    this._isMounted = true;
    this.refresh()
  }

  refresh = () => {
    axios.get(`${URL}?sort=-createdAt`)
      .then(resp => {
        if (this._isMounted) {
          this.setState({ ...this.state, description: '', list: resp.data.data })
        }
      })
  }

  handleAdd = () => {
    const description = this.state.description
    axios.post(URL, { description }).then(this.refresh)
  }

  handleRemove = (todo: any) => {
    axios.delete(`${URL}/${todo.id}`).then(resp => this.refresh())
  }

  handleChange = (e: any) => {
    this.setState({ ...this.state, description: e.target.value })
  }

  handleMarkDone = (todo: any) => {

  }

  render(): ReactNode {
    return (
      <div>
        <Header name='Tarefas' small='Cadastro'></Header>
        <TodoForm handleAdd={this.handleAdd} description={this.state.description} handleChange={this.handleChange} />
        <TodoList list={this.state.list} handleRemove={this.handleRemove} handleMarkDone={this.handleMarkDone} />
      </div>
    );
  }
}

export default Todo;
