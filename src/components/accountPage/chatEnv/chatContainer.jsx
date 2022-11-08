import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Message from './message';

function ChatContainer() {
  return (
    <Flex
      css={{
        overflowY: 'auto',
        height: '72%',
      }}
      dir="column"

    >

      <Message type="myself" />
      <Message />
      <Message type="myself" />
      <Message />
      <Message type="myself" />
    </Flex>
  );
}

export default ChatContainer;
