import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      showTime: true
    }
  }

  hideTime = () => {
    this.setState( this.state.showTime ? { showTime: false }:{ showTime: true })
  }

  render() {
    let timer = this.state.showTime ? <Timer /> : null
    return (
      <div className="App">
        <span className="red-text">{timer} </span>
        <button onClick={this.hideTime}>Hide Time</button>
      </div>
    );
  }
}
export default App;
