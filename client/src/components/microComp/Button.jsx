import React from 'react';

function Button(props) {
  const { name, handler } = props;
  return <button onClick={handler}>{name}</button>;
}

export default Button;
