/* eslint-disable react/prop-types */
import React from 'react';
import IcoChat from '../../../assest/icons/IcoChat';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';

function Info({ name, lastSeen }) {
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

      <IcoChat />

    </Flex>
  );
}

export default Info;
