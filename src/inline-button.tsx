import * as React from "react";
import * as ReactDOM from "react-dom";

export interface InlineClick {
  name: string;
}

export class InlineClickButton extends React.Component<InlineClick> {
  handleClick() {
    alert("The link was clicked.");
  }
  render() {
    return <button onClick={this.handleClick}> {this.props.name} </button>;
  }
}
