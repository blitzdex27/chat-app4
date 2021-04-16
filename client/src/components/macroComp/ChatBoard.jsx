import React from 'react';
import SearchBar from '../SearchBar';
import ChatComposer from '../ChatComposer';
import ChatBox from '../ChatBox';
import Conversations from '../Conversations';

function ChatBoard({ propsBundle }) {
  // destructure the bundle
  const { chatBox, searchBar, chatComposer, conversations } = propsBundle;
  // destructure individual bundle
  const { messages, currentUserStateId } = chatBox;
  const { newSearchState, searchHandler } = searchBar;
  const { messageContentState, messageHandler } = chatComposer;

  return (
    <div>
      <div className="ChatBoard d-flex justify-content-around flex-wrap">
        <div className="left">
          <div className="cHistory">
            <Conversations conversations={conversations} />
          </div>
        </div>

        <div className="middle">
          <div className="cBox">
            <ChatBox chats={messages} userId={currentUserStateId} />
          </div>
          <div className="cCompose">
            <ChatComposer
              messageContentState={messageContentState}
              handler={messageHandler}
            />
          </div>
        </div>
        <div className="right">
          <div className="cSearch">
            <SearchBar
              newSearchState={newSearchState}
              handler={searchHandler}
            />
          </div>
          <div className="cReceipient">cReceipient</div>
        </div>
      </div>
    </div>
  );
}

export default ChatBoard;
