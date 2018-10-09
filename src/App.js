import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {

  state = {
    players: [ {
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
    }]
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title="Scoreboard" player={1}/>
        {this.state.players.map((player) => {
          return <Player 
          playerName={player.name} 
          key={player.id.toString()}
          />
        })}
      </div>
    );
  }
}

export default App;
