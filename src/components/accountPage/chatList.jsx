import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import Chat from './chatList/chat';

function ChatList() {
  return (
    <Flex
      css={{
        width: '35%',
        padding: '$2',
        height: '100%',
        overflowY: 'auto',
      }}
      justify="start"
      align="center"
      dir="column"
    >
      <Chat />
      <Chat />
      <Chat />
      {/* <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat /> */}
    </Flex>
  );
}

export default ChatList;
