import React from 'react';
import TextArea from './microComp/TextArea';
import Button from './microComp/Button';

function ChatComposer(props) {
  const { messageContentState, handler } = props;
  const { compose, send } = handler;
  return (
    <div className="ChatComposer">
      <TextArea state={messageContentState} handler={compose} />
      <Button name="Send" handler={send} />
    </div>
  );
}

export default ChatComposer;
