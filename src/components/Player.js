import React from 'react';
import Counter from './Counter';

const Player = (props) => {
  return (
    <div className='player'>
      <span className='player-name'>
        <button onClick={() =>  props.removePlayer(props.id) } className="remove-player">✖</button>
        {props.playerName}
      </span>
      <Counter />
    </div>
  );
}

export default Player;