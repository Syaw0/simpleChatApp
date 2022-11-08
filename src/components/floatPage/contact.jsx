import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import Avatar from '../global/avatar';
import Text from '../../styles/styledComponents/text';

function Contact() {
  return (
    <Flex css={{
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
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png"
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
          siavash
        </Text>

        <Text css={{
          subhead2: '400',
          color: '$onBg800',
        }}
        >
          19 min ago
        </Text>

      </Flex>
    </Flex>
  );
}

export default Contact;
