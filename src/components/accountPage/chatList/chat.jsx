/* eslint-disable react/prop-types */
import React from 'react';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import Avatar from '../../global/avatar';

function Chat({
  lastChat, avatarImg, name, newMessage, id,
}) {
  const { chats } = mainStore((state) => state.Db);
  const setCurrentUserChat = mainStore((state) => state.setCurrentUserChat);
  const setCurrentRenderedComponent = mainStore((state) => state.setCurrentRenderedComponent);

  const clickOnChatCallback = (e) => {
    const target = e.currentTarget.id;
    const result = chats.find((chat) => chat.targetId.id === target);
    setCurrentUserChat(result);
    setCurrentRenderedComponent('chatEnv');
  };

  return (
    <Flex
      id={id}
      onClick={clickOnChatCallback}
      css={{
        padding: '$1 0',
        borderBottom: '1px solid $onBg100',
        '& *': {
          cursor: 'pointer',
        },
      }}
      justify="between"
      align="center"
    >

      <Flex css={{
        width: '20%',
        '@bp2': {
          width: 'fit-content',
        },
      }}
      >
        <Avatar
          width="50px"
          height="50px"
          src={avatarImg}
        />
      </Flex>

      <Flex
        dir="column"
        css={{

          width: '85%',
          padding: '0 $1',
          '@bp2': {
            width: '100%',

          },
        }}
      >

        <Flex justify="between" align="center">
          <Text css={{
            headline6: '600',
            color: '$onBg900',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '85%',
          }}
          >
            {name}

          </Text>

          <Text css={{
            subhead2: '500',
            color: '$onBg800',
          }}
          >
            {lastChat !== undefined ? lastChat.date : ''}

          </Text>
        </Flex>

        <Flex justify="between" align="center">
          <Text css={{
            subhead2: '300',
            color: '$onBg800',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '85%',
          }}
          >
            {lastChat !== undefined ? lastChat.value : ''}

          </Text>
          {newMessage.length !== 0 && (
          <Text css={{
            width: '25px',
            height: '22px',
            textAlign: 'center',
            backgroundColor: '$primary800',
            color: '$onPrimary',
            borderRadius: '50%',
            marginTop: '4px',

          }}
          >
            {newMessage.length}

          </Text>
          )}
        </Flex>

      </Flex>

    </Flex>
  );
}

export default Chat;
