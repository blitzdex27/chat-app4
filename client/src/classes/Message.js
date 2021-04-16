import initStates from '../scripts/initStates';

const postData = async (data, url) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  return json.isSent;
};

class Message {
  constructor() {
    this.currMessage = 'Hello!';
    this.newMessageState = {};
    this.setnewMessageState = {};
    this.currentUserState = {};
    this.messageData = {};
  }

  compose() {
    console.log('ChatComposer: Composing...');
    const message = this.currMessage;
    this.setNewMessageState((prevValue) => {
      return {
        ...prevValue,
        data: {
          ...prevValue.data,
          content: message,
        },
        isSent: false,
      };
    });
  }

  setSendMessageInfo() {
    // check if the receipient is defined
    const receipient = this.newMessageState.data.receipient;
    if (Object.entries(receipient).length !== 0) {
      console.log('ChatComposer: Sending message');
      console.log('ChatComposer: -> setting message data');
      // supply only non-sensitive sender info
      const { id, givenName, familyName } = this.currentUserState.data;

      const sender = {
        id: id,
        givenName: givenName,
        familyName: familyName,
      };
      const content = this.newMessageState.data.content;
      const messageData = {
        sender: sender,
        receipient: receipient,
        content: content,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        sortInput: new Date().getTime(),
      };

      this.messageData = messageData;

      this.setNewMessageState((prevValue) => {
        const newMessageState = {
          ...prevValue,
          data: {
            ...prevValue.data,
            ...messageData,
          },

          isToBeSent: true,
        };

        return newMessageState;
      });
    }
  }

  send() {
    console.log('ChatComposer: -> sending...');
    // send message

    const message = {
      receipient: this.messageData.receipient,
      sender: this.messageData.sender,
      content: this.messageData.content,
      date: this.messageData.date,
      time: this.messageData.time,
      sortInput: this.messageData.sortInput,
    };
    // post message to server
    // messages.push(message);

    postData(message, '/send-message').then((res) => {
      console.log('Is message sent? ' + res);
    });
    
    // reset new message state except the current receipient
    this.setNewMessageState({
      ...initStates.newMessage,
      data: {
        ...initStates.newMessage.data,
        receipient: this.newMessageState.data.receipient,
      },
    });

    console.log(message);
    console.log('ChatComposer: -> sent.');
  }
}

export default Message;
