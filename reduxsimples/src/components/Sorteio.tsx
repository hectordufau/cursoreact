import { connect } from "react-redux";
import Card from "./Card";

const Sorteio = (props: any) => {
  const { min, max } = props;
  return (
    <Card title="Sorteio do Número" purple>
      <div className="Intervalo">
        <span>
          Resultado:
          <strong>{Math.round(Math.random() * (max - min) + min)}</strong>
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

export default connect(mapStateToProps)(Sorteio);
