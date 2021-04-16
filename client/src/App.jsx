// import { users, messages } from './scripts/mockUpData';

import { useEffect, useState } from 'react';

// import { render } from '@testing-library/react';

// Searchingg imports
import Search from './classes/Search';
import searchHandlerContainer from './scripts/searchHandler';
// Messaging imports

import Message from './classes/Message';
import messageHandlerContainer from './scripts/messagehandler';
// Chatbox imports
import ChatBoard from './components/macroComp/ChatBoard';
import Conversation from './classes/Conversation';

// import initial states
import initStates from './scripts/initStates';

// ??
import messaging from './scripts/messaging';

// Navbar
import Navbar from './components/Navbar.jsx';

// Login / Signup React componenets
import Login from './components/Login';
import Signup from './components/Signup';
// Login / Signup classes
import LogIn from './classes/Login';
import SignUp from './classes/Signup';

// User class
import User from './classes/User';

// getData
import getData from './scripts/getData';

let users = [];
const getUsersIndexData = async () => {
  const url = '/users';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();
  users = json;
};
getUsersIndexData();

const newMessage = new Message();
const newSearch = new Search();
const newSignUp = new SignUp();
const newLogIn = new LogIn();
const newUser = new User();

function App() {
  // STATES
  // current log in state and user that is logged in
  const [currentUserState, setCurrentUserState] = useState(
    initStates.currentUser
  );
  const [loginStatus, setLoginStatus] = useState(false);
  // current search state
  const [newSearchState, setNewSearchState] = useState(initStates.newSearch);
  // current message State
  const [newMessageState, setNewMessageState] = useState(initStates.newMessage);
  // current messages state
  const [messagesState, setMessagesState] = useState(initStates.messages);

  const messages = messagesState.data;

  // want to login or signup
  const [signInOrUp, setSignInOrUp] = useState('in');

  // store all messaging related states into this bundle
  const messagingDepBund = {
    currentUserSt: [currentUserState, setCurrentUserState],
    newSearchSt: [newSearchState, setNewSearchState],
    newMessageSt: [newMessageState, setNewMessageState],
    messagesSt: [messagesState, setMessagesState],
  };

  useEffect(() => {
    messaging(messagingDepBund);
  }, []);

  // SEARCH
  // -> bundles the arguments of the search handler container
  const seaHandContBund = {
    newSearch,
    newSearchState,
    setNewSearchState,
    users,
    setNewMessageState,
  };
  // -> search handler function that contains functions related to search events
  const searchHandler = searchHandlerContainer(seaHandContBund);

  // NEW MESSAGE
  // -> store "message handler container" args into a bundle
  const mesHandContBund = {
    newMessage,
    setNewMessageState,
    newMessageState,
    currentUserState,
  };
  // -> message handler
  const messageHandler = messageHandlerContainer(mesHandContBund);

  // CHAT BOX CHANGE MESSAGE ITEMS BASED ON RECEIPIENT

  // MESSAGES ADDRESSED TO OR SENT BY THE USER
  const newConversation = new Conversation(
    messages,
    currentUserState.data.id,
    newMessageState.data.receipient.id,
    setNewMessageState
  );
  const messagesToDisplay = newConversation.displayConvo();

  // CONVERSATION OF USER
  const convos = newConversation.convoHistory();

  const convoHandler = (receipient) => {
    newConversation.selectConvo(receipient);
  };

  useEffect(() => {}, [messages]);

  // temporary: change users
  const changeUser = () => {
    let nextUserId = Number(currentUserState.data.id) + 1;
    if (nextUserId === 4) {
      nextUserId = 1;
    }
    const nextUser = users.filter((user) => user.id == nextUserId);
    setCurrentUserState((prevValue) => {
      return {
        ...prevValue,
        data: nextUser[0],
      };
    });
  };

  // bundles the props of chat board components
  const chatBoardPropsBundle = {
    chatBox: {
      messages: messagesToDisplay,
      currentUserStateId: currentUserState.data.id,
    },
    searchBar: {
      newSearchState: newSearchState,
      searchHandler: searchHandler,
    },
    chatComposer: {
      messageContentState: newMessageState.data.content,
      messageHandler: messageHandler,
    },
    conversations: {
      convos: convos,
      convoHandler: convoHandler,
      userId: currentUserState.data.id,
    },
  };

  // end of messages codes

  // start of authentication codes
  const loginStateHandler = () => {
    if (newUser.isAuthenticated === true) {
      setLoginStatus(true);
    }
  };

  const loginHandler = () => {
    setSignInOrUp('in');
  };

  const signupHandler = () => {
    console.log('asdas');
    setSignInOrUp('up');
  };
  // NOTE: LOGIN AND SIGN UP IS FUNCTIONING BUT I BREAKS MY CODE WHEN AUTHORIZING
  // JUST COMMENT OUT THE LOGIN AND SIGN UP TO CHECKOUT THE CHATBOARD
  // HOWEVER, YOU WILL ONLY SEE THE USER INTERFACE. IT WILL NOT WORK.
  // IT IS WORKING WHEN I AM DOING IT WITH PURE FRONT END BUT IT BROKE BECAUSE I CAN'T GET THE SERVER RETURN THE USER THAT IS CURRENTLY LOGGED IN SINCE IT REDIRECTS MY CLIENT
  return (
    <div className="App">
      {/* <h1 onClick={changeUser}>Hello</h1> */}
      <Navbar loginHandler={loginHandler} signupHandler={signupHandler} />
      {signInOrUp === 'in' && (
        <Login newUser={newUser} setUserState={setCurrentUserState} />
      )}
      {signInOrUp === 'up' && <Signup newUser={newUser} />}

      {/* <ChatBoard propsBundle={chatBoardPropsBundle} /> */}
    </div>
  );
}

export default App;

// what I will get from the server?
// "user" logged in -> id, givenName, familyName, contacts, email
// currentUserState.data

// "messages" sent to and by the user -> id, content, sender (id, givenName, fullName), receipient (id, givenName, fullName), date, time, sortInput
// const messages = []

// "users" search index -> id, givenName, familyName
// const users = []

// STATES
// newSearchState
// newMessageState

// const newMessageReceived

//
//
