import React, { useEffect, useRef } from 'react';
import ChatItem from './microComp/ChatItem';

function ChatBox(props) {
  const { chats, userId } = props;

  // sort
  chats.sort((a, b) => {
    const x = a.sortInput;
    const y = b.sortInput;
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };
  scrollToBottom();

  return (
    <div className="ChatBox overflow-auto">
      {chats.map((chat, index) => {
        return <ChatItem key={index} chat={chat} userId={userId} />;
      })}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatBox;
