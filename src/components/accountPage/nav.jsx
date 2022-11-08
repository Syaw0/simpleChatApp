import React from 'react';
import IcoContacts from '../../assest/icons/IcoContacts';
import IcoSetting from '../../assest/icons/IcoSetting';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import Avatar from '../global/avatar';

function Nav() {
  return (
    <Flex
      css={{
        borderBottom: '1px solid $onBg300',
        padding: '$1 0',
      }}
      justify="between"
      align="center"
    >
      <Text css={{
        headline2_i: '600',
        color: '$onBg',
        fontFamily: '$playfairDisplay',
      }}
      >
        Exmore
      </Text>

      <Flex
        justify="center"
        align="center"
        css={{
          width: 'fit-content',
          '&>*': {
            marginLeft: '$2',
          },
          '& > svg': {
            fill: '$onBg700',
            width: '32px',
            height: '32px',
            '&:hover': {
              fill: '$obBg',
            },
          },
        }}
      >

        <IcoSetting />
        <IcoContacts />

        <Avatar
          width="50px"
          height="50px"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png"
          onclick={() => {}}
        />
      </Flex>

    </Flex>
  );
}

export default Nav;
