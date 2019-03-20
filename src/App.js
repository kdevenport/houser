import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import Wizard from './component/Wizard';
import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { route }
      </div>
    );
  }
}

export default App;
