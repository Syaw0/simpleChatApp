import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import Avatar from '../../global/avatar';

function Chat() {
  return (
    <Flex
      onClick={() => {}}
      css={{
        padding: '$1 0',
        borderBottom: '1px solid $onBg100',
        '& *': {
          cursor: 'pointer',
        },
      }}
      justify="between"
      align="center"
    >

      <Flex css={{
        width: '20%',
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
          padding: '0 $1',
        }}
      >

        <Flex justify="between" align="center">
          <Text css={{
            headline6: '600',
            color: '$onBg900',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '85%',
          }}
          >
            Siavash

          </Text>

          <Text css={{
            subhead2: '500',
            color: '$onBg800',
          }}
          >
            19:23

          </Text>
        </Flex>

        <Flex justify="between" align="center">
          <Text css={{
            subhead2: '300',
            color: '$onBg800',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '85%',
          }}
          >
            something new in here have to be heared

          </Text>
          <Text css={{
            width: '25px',
            height: '22px',
            textAlign: 'center',
            backgroundColor: '$primary800',
            color: '$onPrimary',
            borderRadius: '50%',
            marginTop: '4px',

          }}
          >
            4

          </Text>
        </Flex>

      </Flex>

    </Flex>
  );
}

export default Chat;
