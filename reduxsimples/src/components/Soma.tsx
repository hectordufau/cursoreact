import { connect } from "react-redux";
import Card from "./Card";

const Soma = (props: any) => {
  const { min, max } = props;
  return (
    <Card title="Soma dos Números" blue>
      <div className="Intervalo">
        <span>
          Resultado:
          <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma);
