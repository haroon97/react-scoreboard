import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {

  state = {
    players: [ {
      name: "Haroon",
      id: 1
    },
    {
      name: "Haza",
      id: 2
    },
    {
      name: "Ahmed",
      id: 3
    },
    {
      name: "Zaman",
      id: 4
    }]
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(player => player.id !== id)
      }
    })
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
        {this.state.players.map((player) => {
          return <Player 
          playerName={player.name} 
          key={player.id.toString()}
          removePlayer={this.handleRemovePlayer}
          id={player.id}
          />
        })}
      </div>
    );
  }
}

export default App;
