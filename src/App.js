import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';

class App extends Component {

  state = {
    players: [ {
      name: "Haroon",
      score: 0,
      id: 1
    },
    {
      name: "Haza",
      score: 0,
      id: 2
    },
    {
      name: "Ahmed",
      score: 0,
      id: 3
    },
    {
      name: "Zaman",
      score: 0,
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

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: prevState.players[index].score += delta
      }
    })
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
        {this.state.players.map((player, index) => {
          return <Player 
          playerName={player.name} 
          key={player.id.toString()}
          removePlayer={this.handleRemovePlayer}
          id={player.id}
          score={player.score}
          scoreChange={this.handleScoreChange}
          index={index}
          />
        })}
      </div>
    );
  }
}

export default App;
