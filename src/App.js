import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Scoreboard" player={1}/>
        <Player playerName={"Haroon"} score={25}/>
      </div>
    );
  }
}

export default App;
