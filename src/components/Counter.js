import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ index, scoreChange, score }) => {
  return (
    <div className='counter'>
      <button onClick={() => scoreChange(index, -1)} className='counter-action decrement'>-</button>
      <span className='counter-score'>{score}</span>
      <button onClick={() => scoreChange(index, +1)} className='counter-action increment'>+</button>
    </div>
  );
}

Counter.propTypes = {
  index: PropTypes.number,
  scoreChange: PropTypes.func,
  score: PropTypes.number
};

export default Counter;