/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';

function Biography({ bio }) {
  return (
    <Flex
      dir="column"
      css={{
      }}
    >
      <Text css={{
        width: '100%',
        borderBottom: '1px solid $onBg300',
        subhead1_i: '400',
        color: '$onBg900',
        padding: '2px 0',
      }}
      >
        biography
      </Text>
      <Text css={{
        color: '$onBg',
        headline6: '500',
        padding: '5px 0',
      }}
      >
        {bio}
      </Text>
    </Flex>
  );
}

export default Biography;
