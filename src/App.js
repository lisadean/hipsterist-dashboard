import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hipsterist</h1>
        </header>
        <Weather />
      </div>
    );
  }
}

export default App;
