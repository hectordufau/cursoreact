import Grid from "./Grid";
import IconButton from "./IconButton";

const TodoForm = (props: any) => {
  return (
    <div className="row" role="form">
      <Grid cols="12 9 10">
        <input
          id="description"
          type="text"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onChange={props.handleChange}
        />
      </Grid>
      <Grid cols="auto">
        <IconButton styleb="primary" icon="plus" onClick={props.handleAdd} />
        <IconButton styleb="info" icon="search" onClick={props.handleSearch} />
        <IconButton styleb="light" icon="clear" onClick={props.handleClear} />
      </Grid>
    </div>
  );
};

export default TodoForm;
