import React from 'react';
import Counter from './Counter';

const Player = (props) => {
  return (
    <div className='player'>
      <span className='player-name'>
        <button onClick={() =>  props.removePlayer(props.id) } className="remove-player">✖</button>
        {props.playerName}
      </span>
      <Counter 
      score={props.score}
      scoreChange={props.scoreChange}
      index={props.index}
      />
    </div>
  );
}

export default Player;