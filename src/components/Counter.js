import React from 'react';

const Counter = (props) => {
  return (
    <div className='counter'>
      <button onClick={() => props.scoreChange(props.index, -1)} className='counter-action decrement'>-</button>
      <span className='counter-score'>{props.score}</span>
      <button onClick={() => props.scoreChange(props.index, +1)} className='counter-action increment'>+</button>
    </div>
  );
}

export default Counter;