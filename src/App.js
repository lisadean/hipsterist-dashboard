import React, { Component } from "react";
import "./App.css";
import Weather from "./components/Weather";
import Pomodoro from "./Pomodoro/pomodoro";
import ProjectRandomizer from "./ProjectRandomizer/ProjectRandomizer";
import MovieDashboard from "./MovieDashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <header id="showcase" className="grid">
          <div className="bg-image" />
          <h1>Welcome to Hipsterist</h1>
          <p>This is an obscure dashboard you've probably never heard of.</p>
        </header>
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
