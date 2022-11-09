/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';

function Name({ name, onclick }) {
  return (
    <Flex
      onClick={onclick}
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
        name
      </Text>
      <Text css={{
        color: '$onBg',
        headline6: '500',
        padding: '5px 0',
        cursor: 'pointer',
      }}
      >
        {name}
      </Text>
    </Flex>
  );
}

export default Name;
