import React from 'react';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import Message from './message';

function ChatContainer() {
  const currentUserChat = mainStore((state) => state.currentUserChat);

  return (
    <Flex
      css={{
        overflowY: 'auto',
        height: '72%',
      }}
      dir="column"

    >
      {currentUserChat.chatList.map((chat) => (
        <Message
          key={chat.index}
          date={chat.date}
          value={chat.value}
          status={chat.status}
          type={chat.transferId === currentUserChat.targetId.id ? 'other' : 'myself'}
        />
      ))}
    </Flex>
  );
}

export default ChatContainer;
