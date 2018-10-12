import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends React.PureComponent {

  static propTypes = {
    playerName: PropTypes.string,
    removePlayer: PropTypes.func,
    index: PropTypes.number,
    score: PropTypes.number,
    scoreChange: PropTypes.func,
    id: PropTypes.number
  };

  render() {

    const {
      playerName,
      removePlayer,
      index,
      score,
      scoreChange,
      id
    } = this.props;

    return (
      <div className='player'>
        <span className='player-name'>
          <button onClick={() => removePlayer(id) } className="remove-player">✖</button>
          {playerName}
        </span>
        <Counter 
        score={score}
        scoreChange={scoreChange}
        index={index}
        />
      </div>
    );
  }
}

export default Player;