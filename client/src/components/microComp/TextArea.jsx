import React from 'react';

function TextArea(props) {
  const { state, handler, placeholder } = props;

  return (
    <textarea onChange={handler} value={state} placeholder={placeholder}>
      {props.name}
    </textarea>
  );
}

export default TextArea;
