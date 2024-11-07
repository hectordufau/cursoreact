import { Component, ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators } from "redux";
import { add, changeDescription, clear, search } from "../store/todoActions";
import Grid from "./Grid";
import IconButton from "./IconButton";

const mapStateToProps = (state: any) => ({
  description: state.todo.description,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;
type State = {};

class TodoForm extends Component<Props, State> {
  componentDidMount(): void {
    this.props.search();
  }

  render(): ReactNode {
    const { description, add, changeDescription, search, clear } = this.props;
    return (
      <div className="row" role="form">
        <Grid cols="12 9 10">
          <input
            id="description"
            type="text"
            className="form-control"
            placeholder="Adicione uma tarefa"
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
          />
        </Grid>
        <Grid cols="auto">
          <IconButton
            styleb="primary"
            icon="plus"
            onClick={() => add(description)}
          />
          <IconButton styleb="info" icon="search" onClick={search} />
          <IconButton styleb="light" icon="clear" onClick={clear} />
        </Grid>
      </div>
    );
  }
}

export default connector(TodoForm);
