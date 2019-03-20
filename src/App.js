import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import Wizard from './component/Wizard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Wizard />
      </div>
    );
  }
}

export default App;
