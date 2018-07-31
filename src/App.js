import React, { Component } from 'react';
import './App.css';
import Weather from './Weather';
import Pomodoro from './Pomodoro/pomodoro';
import ProjectRandomizer from './ProjectRandomizer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />

        <div className="pomodoro">
          <Pomodoro />
        </div>

        <div className="project-randomizer-container">
          <ProjectRandomizer />
        </div>
      </div>
    );
  }
}

export default App;
