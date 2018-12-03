import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvaar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

class App extends Component {
  handleClick() {
    alert("btn clicado");
  }
  render() {
    return (
      <Fragment>
        <h1>Hello Moom</h1>
        <Button onClick={this.handleClick}>Enviar :)</Button>
        <Button
          onClick={() => {
            alert("akdaskdkasdk");
          }}
        />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
