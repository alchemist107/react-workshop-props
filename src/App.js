import React, { Component } from 'react';
import './App.css';
import Keyboard from "./components/Keyboard"

class App extends Component {
  render() {
    return (
     <div className="Keyboard">
         <h1>KeyBoard</h1>
         <Keyboard/>
      </div>
    );
  }
}

export default App;
