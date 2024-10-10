import { Component } from "react";
import "./Button.css";

class Button extends Component<{
  label: string;
  operation?: boolean;
  double?: boolean;
  triple?: boolean;
  click?: any;
}> {
  classes =
    "button" +
    (this.props.operation ? " operation" : "") +
    (this.props.double ? " double" : "") +
    (this.props.triple ? " triple" : "");

  render() {
    return (
      <button
        className={this.classes}
        onClick={
          this.props.click
            ? (e) => this.props.click(this.props.label)
            : undefined
        }
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
