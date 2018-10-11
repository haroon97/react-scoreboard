import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    playerName: ''
  }

  onNameChange = (e) => {
    this.setState({ playerName: e.target.value })
  }

  onPlayerSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.playerName)
  } 

  render() {
    return (
        <form onSubmit={this.onPlayerSubmit}>
          { console.log(this.state.playerName) }
          <input 
          type="text"
          placeholder="Enter player's name"
          value={this.state.playerName}
          onChange={this.onNameChange}
          required
          />
          <input 
          type="submit"
          />
        </form>
    );
  }
}

export default AddPlayerForm;