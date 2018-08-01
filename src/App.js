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
        {/* Header */}
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Welcome to Hipsterest</h1>
            <p class="lead">
              This is an obscure dashboard you've probably never heard of.
            </p>
            <hr />
          </div>
        </div>

        {/* MAIN */}
        <div className="contianer">
          <div className="weather area">
            <Weather />
          </div>
          <div className="pomodoro area area-2">
            <Pomodoro />
          </div>
          <div className="project-randomizer-container area">
            <ProjectRandomizer />
          </div>
          <div>
            <MovieDashboard className="area" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
