import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import ChatContainer from './chatEnv/chatContainer';
import ChatInput from './chatEnv/chatInput';
import Info from './chatEnv/info';

function ChatEnv() {
  return (
    <Flex
      css={{
        width: '65%',
        borderLeft: '1px solid $onBg300 ',
        padding: '$2 $2 0 $2',
      }}
      justify="between"
      align="center"
      dir="column"
    >
      <Info />
      <ChatContainer />
      <ChatInput />
    </Flex>
  );
}

export default ChatEnv;
