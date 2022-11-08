import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import Avatar from '../../global/avatar';

function Info() {
  return (
    <Flex css={{
      borderBottom: '1px solid $onBg300',
      padding: '0 0 $1 0',
      height: '13%',
    }}
    >
      <Flex css={{
        width: '10%',
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
          width: '90%',
        }}
      >
        <Text css={{
          headline6: '600',
          color: '$onBg900',
        }}
        >
          Siavash

        </Text>

        <Text css={{
          subhead2: '400',
          color: '$onBg700',
        }}
        >
          19 min ago

        </Text>
      </Flex>
    </Flex>
  );
}

export default Info;
