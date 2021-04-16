import React from 'react';

function ChatItem(props) {
  const { chat, userId } = props;
  const { sender, receipient, date, time, content } = chat;
  const { givenName, familyName } = sender;

  let style = { textAlign: 'left' };

  if (userId === sender.id) {
    style = {
      textAlign: 'right',
    };
  }

  return (
    <div style={style} className="ChatItem">
      <p>
        <span className="fw-bold">
          {givenName} {familyName}{' '}
        </span>
        ({date} {time})
      </p>
      <p>{content}</p>
      <p></p>
    </div>
  );
}

export default ChatItem;
