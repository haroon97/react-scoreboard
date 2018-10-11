import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

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

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => {
      return {
        score: prevState.players[index].score += delta
      }
    })
  }

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  }

  render() {
    return (
      <div className='scoreboard'>
        <Header title="Scoreboard" 
        players={this.state.players}
        totalPoints={this.state.totalPoints}
        />
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
        <AddPlayerForm 
        addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
