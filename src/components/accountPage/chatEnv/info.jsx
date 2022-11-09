import React, { useState } from 'react';
import IcoArrowBack from '../../../assest/icons/IcoArrowBack';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import Avatar from '../../global/avatar';

function Info() {
  const currentUserChat = mainStore(state=>state.currentUserChat)
  const [isLowWidth, setIsLowWidth] = useState(false);

  return (
    <Flex css={{
      borderBottom: '1px solid $onBg300',
      padding: '0 0 $1 0',
      height: '13%',
    }}
    >
      <Flex css={{
        width: '10%',
        '@bp2': {
          width: 'fit-content',
        },
      }}
      >
        <Avatar
          width="50px"
          height="50px"
          src={currentUserChat.targetId.avatarImg}
        />
      </Flex>
      <Flex
        css={{
          width: '90%',
          '@bp2': {
            width: '100%',
            padding: '0 $1',
          },
        }}
      >
        <Flex dir="column">
          <Text css={{
            headline6: '600',
            color: '$onBg900',
          }}
          >
            {currentUserChat.targetId.name}

          </Text>

          <Text css={{
            subhead2: '400',
            color: '$onBg700',
          }}
          >
            {currentUserChat.targetId.lastSeen}

          </Text>
        </Flex>

        {isLowWidth && (
        <Flex
          justify="center"
          align="center"
          css={{
            width: 'fit-content',
            fill: '$onBg800',
            '& svg': {
              width: '20px',
              height: '20px',
              fill: '$onBg',
            },
          }}
        >
          <IcoArrowBack />
        </Flex>
        )}
        {/* <Text css={{
            height:"100%"
          }}>
            back
          </Text> */}
      </Flex>
    </Flex>
  );
}

export default Info;
