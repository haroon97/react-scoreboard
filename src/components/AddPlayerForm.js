import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {

  static propTypes = {
    addPlayer: PropTypes.func
  }

  playerInput = React.createRef();

  onPlayerSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  } 

  render() {
    return (
        <form onSubmit={this.onPlayerSubmit}>
          <input 
          ref={this.playerInput}
          type="text"
          placeholder="Enter player's name"
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