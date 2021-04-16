import React from 'react';

import ConversationItem from './microComp/nanoComp/ConversationItem';

function Conversations({ conversations }) {
  const { convos, convoHandler, userId } = conversations;

  const convosTemp = convos.filter((convo) => {
    if (userId === convo.receipient.id || userId === convo.sender.id) {
      return true;
    }
    return false;
  });
  return (
    <div className="Conversations overflow-auto">
      {convosTemp.map((convo, index) => {
        return (
          <ConversationItem
            key={index}
            convo={convo}
            convoHandler={convoHandler}
            userId={userId}
          />
        );
      })}
    </div>
  );
}

export default Conversations;
