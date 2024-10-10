import { Component } from "react";
import "./Display.css";

class Display extends Component<{ value: string }> {
  render() {
    return <button className="display">{this.props.value}</button>;
  }
}

export default Display;
