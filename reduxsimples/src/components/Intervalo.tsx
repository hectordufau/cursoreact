import { connect } from "react-redux";
import {
  alterarNumeroMaximo,
  alterarNumeroMinimo,
} from "../store/actions/numerosActions";
import Card from "./Card";
import "./Intervalo.css";

const Intervalo = (props: any) => {
  const { min, max, alterarMin, alterarMax } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => alterarMin(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => alterarMax(+e.target.value)}
          />
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    alterarMin(novoMin: number) {
      const action = alterarNumeroMinimo(novoMin);
      dispatch(action);
    },
    alterarMax(novoMax: number) {
      const action = alterarNumeroMaximo(novoMax);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
