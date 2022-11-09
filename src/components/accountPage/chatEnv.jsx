import React from 'react';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import ChatContainer from './chatEnv/chatContainer';
import ChatInput from './chatEnv/chatInput';
import EmptyChatEnv from './chatEnv/emptyChatEnv';
import Info from './chatEnv/info';

function ChatEnv() {
  const currentUserChat = mainStore((state) => state.currentUserChat);
  return (
    <Flex
      css={{
        width: '65%',
        borderLeft: '1px solid $onBg300 ',
        padding: '$2 $2 0 $2',
        '@bp2': {
          // display:"none",
          width: '100%',
          borderLeft: 'none',
          padding: '0',
        },
      }}
      justify="between"
      align="center"
      dir="column"
    >
      {currentUserChat.targetId !== undefined
      && (
      <>
        <Info />
        <ChatContainer />
        <ChatInput />
      </>
      )}

      {currentUserChat.targetId === undefined && <EmptyChatEnv />}
    </Flex>
  );
}

export default ChatEnv;
