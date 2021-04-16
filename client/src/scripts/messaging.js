import React, { useEffect, useState } from 'react';
import getData from '../scripts/getData';

// updates the messages every n second
let count = 0;
const messageUpdater = ({ setMessagesState, setCurrentUserState }) => {
  const n = 1;
  const nMilli = n * 1000;
  console.log('I should be triggered once.');

  if (count === 0) {
    setInterval(() => {
      count += 10;
      console.log(count);
      // getData('/api/user')
      //   .then((res) => {
      //     console.log(res);
      //     setCurrentUserState(res);
      //   })
      //   .catch((err) => console.log(err));
      getData('/messages').then((res) => {
        setMessagesState(res);
      });
    }, nMilli);
  }
};

function messagingContainer(bundle) {
  // Unpacks the bundle by states
  const { currentUserSt, newSearchSt, newMessageSt, messagesSt } = bundle;
  const [currentUserState, setCurrentUserState] = currentUserSt;
  const [newSearchState, setNewSearchState] = newSearchSt;
  const [newMessageState, setNewMessageState] = newMessageSt;
  const [messagesState, setMessagesState] = messagesSt;

  messageUpdater({ setMessagesState, setCurrentUserState });
}

export default messagingContainer;
