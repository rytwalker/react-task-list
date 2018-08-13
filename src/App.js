import React, { Component } from 'react';
import Card from './components/Card/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Do Work</h1>
        <Card />
      </div>
    );
  }
}

export default App;
