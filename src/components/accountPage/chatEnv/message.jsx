/* eslint-disable react/prop-types */
import React from 'react';
import IcoMsgStatus1 from '../../../assest/icons/IcoMsgStatus1';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';

function Message({
  type, value, date, status,
}) {
  return (
    <Flex justify={type === 'myself' ? 'start' : 'end'}>
      <Flex
        dir="column"
        css={{
          padding: '$1',
          marginTop: '$2',
          backgroundColor: type === 'myself' ? '$primary' : '$secondary',

          width: '50%',
          borderRadius: '10px',

        }}
      >
        <Text css={{
          headline6: '400',
          color: type === 'myself' ? '$onPrimary' : '$onSecondary',
        }}
        >
          {value}
        </Text>

        <Flex
          justify="end"
          align="center"
          css={{
            '& svg': {
              fill: type === 'myself' ? '$onPrimary700' : '$onSecondary700',
              width: '15px',
              height: '15px',
              // transform:"rotate(180deg)",
              // transition:'transform 4s',
              cursor: 'default',
            },
          }}
        >
          <Text css={{
            subhead2: '500',
            color: type === 'myself' ? '$onPrimary700' : '$onSecondary700',
          }}
          >
            {date}
          </Text>

          {type === 'myself' && <IcoMsgStatus1 />}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Message;
