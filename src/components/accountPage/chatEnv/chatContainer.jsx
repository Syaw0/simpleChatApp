import React, { useEffect } from 'react';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import Message from './message';

function ChatContainer() {
  const Db = mainStore((state) => state.Db);
  const currentUserChat = mainStore((state) => state.currentUserChat);
  const setCurrentUserChat = mainStore((state) => state.setCurrentUserChat);

  useEffect(() => {
    const con = document.getElementById('container');
    con.scrollTo({ top: con.scrollHeight + 200, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const newUserChat = Db.chats.find((chat) => chat.targetId.id === currentUserChat.targetId.id);
    setCurrentUserChat(newUserChat);
    const con = document.getElementById('container');
    if (newUserChat.chatList.length !== currentUserChat.chatList.length) {
      setTimeout(() => {
        con.scrollTo({ top: con.scrollHeight + 200, behavior: 'smooth' });
      });
    }
  }, [Db]);

  return (
    <Flex
      id="container"
      css={{
        overflowY: 'auto',
        height: '72%',
      }}
      dir="column"

    >
      {currentUserChat.chatList.map((chat) => (
        <Message
          key={chat.index + chat.date}
          date={chat.date}
          value={chat.value}
          status={chat.status}
          type={chat.transfer === currentUserChat.targetId.id ? 'other' : 'myself'}
        />
      ))}
    </Flex>
  );
}

export default ChatContainer;
