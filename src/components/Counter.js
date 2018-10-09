import React from 'react';

class Counter extends React.Component {

  state = {
    score : 0
  };

  incrementScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      }
    }) 
  }

  decrementScore = () => {
    this.setState(prevState => {
      return {
        score: prevState.score - 1
      }
    }) 
  }

  render() {
    return (
      <div className='counter'>
        <button onClick={this.decrementScore} className='counter-action decrement'>-</button>
        <span className='counter-score'>{this.state.score}</span>
        <button onClick={this.incrementScore} className='counter-action increment'>+</button>
      </div>
    );
  }
}

export default Counter;