import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span>{props.totalPlayers}</span>
    </header>
  );
}

export default Header;