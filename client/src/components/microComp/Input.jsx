import React from 'react';

function Input(props) {
  const { state, handler, placeholder } = props;

  return (
    <input onChange={handler} value={state} placeholder={placeholder}>
      {props.name}
    </input>
  );
}

export default Input;
