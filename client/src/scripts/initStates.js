const initStates = {
  currentUser: {
    data: {
      id: '',
      givenName: '',
      familyName: '',
      contacts: [],
      email: '',
    },
    isAuthenticated: false,
  },
  newSearch: {
    query: '', // string, search query
    result: [], // array, user objects
    selected: {}, // object, selected receipient
    isDone: false, // boolean, user submits the selected receipient to start messaging
  },
  newMessage: {
    data: {
      receipient: {}, // object, message receipient
      content: '', // string, message content
      sender: {}, // object, message sender
      date: '', // string, date sent
      time: '', // string, time sent
      sortInput: 0, // number, milliseconds since January 1, 1970
    },

    isToBeSent: false, // boolean, specifies if the message is ready to be sent
    isSent: false, // boolean, specifies if the message is sent
  },
  messages: {
    data: [
      {
        sender: {},
        receipient: {},
        data: '',
        time: '',
        content: '',
        sortInput: 0,
      },
    ],
    updataToggle: null,
  },
};

export default initStates;
