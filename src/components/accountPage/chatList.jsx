import React from 'react';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Chat from './chatList/chat';

function ChatList() {
  const chatList = mainStore((state) => state.Db.chats);
  const mySelf = mainStore((state) => state.Db.mySelf);

  return (
    <Flex
      css={{
        width: '35%',
        padding: '$2',
        height: '100%',
        overflowY: 'auto',
        '@bp2': {
          width: '100%',
          padding: '$2 0',
          display: 'none',
        },
      }}
      justify="start"
      align="center"
      dir="column"
    >

      {chatList.map((v) => (
        <Chat
          key={v.targetId.id}
          id={v.targetId.id}
          avatarImg={v.targetId.avatarImg}
          name={v.targetId.name}
          lastChat={v.chatList.find((chat) => chat.index === v.chatList.length)}
          newMessage={v.chatList.filter((chat) => {
            if (chat.receiverId === mySelf.id) {
              if (!chat.seen) return chat;
            }
            return null;
          })}
        />
      ))}

    </Flex>
  );
}

export default ChatList;
