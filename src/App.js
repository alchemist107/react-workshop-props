import React, { Component } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import FirstChild from "./components/FirstChild";
import SecondChild from "./components/SecondChild";
const controlTheUserInput = value => {
  return value.substr(0, 16).replace(/\D/gi, "");
};

let students = ["houssem", "chaima", "nada", "richel", "amin", "asma", "chams"];

class App extends Component {
  state = {
    userInput: "",
    students: students,
    searchValue: ""
  };

  grabTheValue = value => {
    this.setState({
      searchValue: value
    });
  };

  // handleChange(value) {
  //   this.setState({
  //     userInput: value
  //   });
  // }

  render() {
    const filtredStudents = this.state.students.filter(
      el => el.toLowerCase().indexOf(this.state.searchValue) != -1
    );
    return (
      <div className="Keyboard">
        {/* <div>
          <h2>Affichage</h2>
          <h1>{controlTheUserInput(this.state.userInput)}</h1>
        </div>
        <div>
          <h2>UserInput </h2>
          <input
            onChange={e => this.handleChange(e.target.value)}
            value={controlTheUserInput(this.state.userInput)}
        </div>
          /> */}
        {filtredStudents.map(stud => (
          <FirstChild names={stud} />
        ))}

        <SecondChild theBox={this.grabTheValue} />
      </div>
    );
  }
}

export default App;
