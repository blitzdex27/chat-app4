const messageHandlerContainer = (bundle) => {
  // unpack the bundle
  const {
    newMessage,
    setNewMessageState,
    newMessageState,
    currentUserState,
  } = bundle;

  // update the newMessage object with the current states
  newMessage.setNewMessageState = setNewMessageState;
  newMessage.newMessageState = newMessageState;
  newMessage.currentUserState = currentUserState;

  // handlers of composing new message events (each handlers are stored inside this single object)
  const messageHandler = {
    compose: (event) => {
      newMessage.currMessage = event.target.value;
      newMessage.compose();
    },
    send: () => {
      // set the needed info then it will be sent as side effect

      newMessage.setSendMessageInfo();
      newMessage.send();
    },
  };

  // returns the object that contains all the handlers for compising new message events
  return messageHandler;
};

export default messageHandlerContainer;
