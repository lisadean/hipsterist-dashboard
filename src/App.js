import React, { Component } from 'react';
import './App.css';
import Pomodoro from './Pomodoro/pomodoro';
import ProjectRandomizer from './ProjectRandomizer';


class App extends Component {
  render() {
    return (
      <div className="App">

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
