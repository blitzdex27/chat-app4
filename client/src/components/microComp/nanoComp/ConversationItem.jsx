import React from 'react';

function ConversationItem(props) {
  const { convo, convoHandler, userId } = props;

  let convoName = '';
  // sender and receipient fullnames
  const sFN = convo.sender.givenName + ' ' + convo.sender.familyName;
  const rFN = convo.receipient.givenName + ' ' + convo.receipient.familyName;
  if (userId === convo.receipient.id) {
    convoName = sFN;
  } else {
    convoName = rFN;
  }

  // The latest sender and receipient may interchange
  // however, when the user selects a conversation,
  // the user intends to send a message to that receipient, more likely (active).
  // Sometimes, (this is passive) the user just want to check the messages.
  // Thereby, in this project, the receipient id will determine the displayed conversation on the chatbox.
  // And so, the below decision block will determine the conversation to be displayed in the chat box.
  let convoReceipient = convo.receipient;
  if (userId === convo.receipient.id) {
    convoReceipient = convo.sender;
  }

  return (
    <div
      onClick={() => convoHandler(convoReceipient)}
      className="ConversationItem"
    >
      <p className="convo-name">{convoName}</p>
      <p className="convo-prev">
        {convo.sender.givenName}: {convo.content.substring(0, 50)}
      </p>
    </div>
  );
}

export default ConversationItem;
