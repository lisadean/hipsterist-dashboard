import React, { Component } from 'react';
import './App.css';
import Pomodoro from './Pomodoro/pomodoro';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="pomodoro">
          <Pomodoro />
        </div>

      </div>
    );
  }
}

export default App;
