/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';

function MediaBox({ name, Icon, value }) {
  return (
    <Flex
    justify="between"
      css={{
        '& svg': {
          width: '25px',
          height: '25px',
          fill: '$onBg800',
        },
        padding:"$1 0"
      }}
    >
      <Flex>
      <Icon />
      <Text css={{
        headline6: '500',
        color: '$onBg800',
        padding:"0 $1"
      }}
      >
        {name}

      </Text>
      </Flex>
      <Text css={{
        headline6_i:"500",
        color:"$onBg"
      }}>
        {value}
      </Text>
    </Flex>
  );
}

export default MediaBox;
