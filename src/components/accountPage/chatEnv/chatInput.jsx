import React from 'react';
import IcoEmoji from '../../../assest/icons/IcoEmoji';
import IcoFile from '../../../assest/icons/IcoFile';
import IcoSend from '../../../assest/icons/IcoSend';
import Flex from '../../../styles/styledComponents/flex';
import Input from '../../../styles/styledComponents/input';

function ChatInput() {
  return (
    <Flex
      justify="between"
      align="center"
      css={{
        height: '15%',
        padding: '$1 0',
        borderTop: '1px solid $onBg300',
        '& svg': {
          width: '30px',
          height: '30px',
          fill: '$onBg700',
          '&:hover': {
            fill: '$onBg900',
          },
        },
      }}
    >
      <Flex
        justify="around"
        css={{
          width: '15%',
          borderRight: '1px solid $onBg100',
        }}
      >
        <IcoFile />
        <IcoEmoji />
      </Flex>

      <Input
        placeholder="type here your message"
        as="textarea"
        type="text"
        css={{
          width: '75%',
          height: '100%',
          resize: 'none',
          color: '$onBg',
          border: 'none',
          subhead1: '500',
          padding: '5px',
          backgroundColor: 'transparent',
          '&:focus': {
            border: 'none',
            outline: 'none',
          },
        }}
      />

      <Flex
        justify="end"
        css={{
          width: '10%',
          borderLeft: '1px solid $onBg100',

        }}
      >
        <IcoSend />
      </Flex>
    </Flex>
  );
}

export default ChatInput;
