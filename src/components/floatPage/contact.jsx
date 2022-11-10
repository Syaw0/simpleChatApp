/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import Avatar from '../global/avatar';
import Text from '../../styles/styledComponents/text';
import handleOpeningFloat from '../../utility/floatPage/handleOpeningFloat';
import mainStore from '../../store/mainStore';

function Contact({
  avatarImg, name, lastSeen, wholeContact,
}) {
  const setCurrentProfile = mainStore((state) => state.setCurrentProfile);

  return (
    <Flex
      onClick={() => { handleOpeningFloat('chatAvatar'); setCurrentProfile(wholeContact); }}
      css={{
        padding: '$1 0',
        borderBottom: '1px solid $onBg100',
        '& *': {
          cursor: 'pointer',
        },
      }}
    >
      <Flex css={{
        width: '15%',
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
        }}
      >
        <Text css={{
          headline6: '500',
          color: '$onBg',
        }}
        >
          {name}
        </Text>

        <Text css={{
          subhead2: '400',
          color: '$onBg800',
        }}
        >
          {lastSeen}
        </Text>

      </Flex>
    </Flex>
  );
}

export default Contact;
