import React, { Component } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";

const controlTheUserInput = value => {
  return value.substr(0, 16).replace(/\D/gi, "");
};

class App extends Component {
  state = {
    userInput: ""
  };

  handleChange(value) {
    this.setState({
      userInput: value
    });
  }

  render() {
    return (
      <div className="Keyboard">
        <div>
          <h2>Affichage</h2>
          <h1>{controlTheUserInput(this.state.userInput)}</h1>
        </div>
        <div>
          <h2>UserInput </h2>
          <input
            onChange={e => this.handleChange(e.target.value)}
            value={controlTheUserInput(this.state.userInput)}
          />
        </div>
      </div>
    );
  }
}

export default App;
