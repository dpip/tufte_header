import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import './components/Body.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
