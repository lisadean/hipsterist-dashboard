import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Pomodoro from "./Pomodoro/pomodoro";
import ProjectRandomizer from "./ProjectRandomizer/ProjectRandomizer";
import MovieDashboard from "./MovieDashboard/MovieDashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className=" ">
          <div className="weather  col-sm">
            <Weather />
          </div>
          <div className="pomodoro col-sm">
            <Pomodoro />
          </div>
        </div>
        <div className="project-randomizer-container">
          <ProjectRandomizer />
        </div>

        <div>
          <MovieDashboard />
        </div>
      </div>
    );
  }
}

export default App;
