import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span>{props.player}</span>
    </header>
  );
}

export default Header;