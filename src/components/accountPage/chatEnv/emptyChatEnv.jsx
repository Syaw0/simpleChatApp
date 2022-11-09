import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';

function EmptyChatEnv() {
  return (
    <Flex
      justify="center"
      align="center"
      css={{
        height: '100%',
      }}
    >
      <Text css={{
        headline6_i: '500',
        color: '$onBg900',
      }}
      >
        choose a chat from side to chat :)
        {' '}
        <br />
        if you have not any chat start chat with friend!
      </Text>
    </Flex>
  );
}

export default EmptyChatEnv;
