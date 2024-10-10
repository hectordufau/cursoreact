import React, { Component } from "react";
import Botoes from "./Botoes";
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";

class Contador extends Component<{
  numeroInicial: number | null;
  passoInicial: number | null;
}> {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };
  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };
  setPasso = (novopasso: any) => {
    this.setState({
      passo: novopasso,
    });
  };
  render(): React.ReactNode {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <Botoes inc={this.inc} dec={this.dec}></Botoes>
      </div>
    );
  }
}

export default Contador;
