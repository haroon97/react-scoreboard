import React from 'react';

const Player = (props) => {
  return (
    <div className='player'>
      <span className='player-name'>
        {props.playerName}
      </span>
    </div>
  );
}

export default Player;