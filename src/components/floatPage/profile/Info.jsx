/* eslint-disable react/prop-types */
import React from 'react';
import IcoChat from '../../../assest/icons/IcoChat';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';

function Info({ name, lastSeen }) {
  const currentProfile = mainStore((state) => state.currentProfile);
  const setCurrentUserChat = mainStore((state) => state.setCurrentUserChat);
  const setCurrentRenderedComponent = mainStore((state) => state.setCurrentRenderedComponent);
  const Db = mainStore((state) => state.Db);
  const isFloatOpen = mainStore((state) => state.isFloatOpen);
  const closeAndEraseFloat = mainStore((state) => state.closeAndEraseFloat);

  const handleChatIconClick = () => {
    const finedChat = Db.chats.find((chat) => chat.targetId.id === currentProfile.id);
    setCurrentUserChat(finedChat);
    setCurrentRenderedComponent('chatEnv');
    if (isFloatOpen) {
      closeAndEraseFloat();
    }
  };

  return (
    <Flex
      css={{
        '& svg': {
          width: '40px',
          height: '40px',
          fill: '$onBg600',
          '&:hover': {
            fill: '$onBg',
          },
        },
      }}
    >
      <Flex dir="column">
        <Text css={{
          headline4: '600',
          color: '$onBg900',
        }}
        >
          {name}
        </Text>
        <Text css={{
          subhead2: '500',
          color: '$onBg700',
        }}
        >
          {lastSeen}
        </Text>
      </Flex>

      {Db.mySelf.id !== currentProfile.id && <IcoChat onclick={handleChatIconClick} />}

    </Flex>
  );
}

export default Info;
