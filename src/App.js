import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

const players = [
  {
    name: "Haroon",
    score: 50,
    id: 1
  },
  {
    name: "Haza",
    score: 85,
    id: 2
  },
  {
    name: "Ahmed",
    score: 95,
    id: 3
  },
  {
    name: "Zaman",
    score: 80,
    id: 4
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Scoreboard" player={1}/>
        {players.map((player) => {
          return <Player 
          playerName={player.name} 
          score={player.score}
          key={player.id.toString()}
          />
        })}
      </div>
    );
  }
}

export default App;
