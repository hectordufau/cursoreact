import { connect } from "react-redux";
import Card from "./Card";

const Media = (props: any) => {
  const { min, max } = props;
  return (
    <Card title="Média dos Números" green>
      <div className="Intervalo">
        <span>
          Resultado:
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state: any) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default connect(mapStateToProps)(Media);
