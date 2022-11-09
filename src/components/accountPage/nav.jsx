import React from 'react';
import IcoContacts from '../../assest/icons/IcoContacts';
import IcoSetting from '../../assest/icons/IcoSetting';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import Avatar from '../global/avatar';

function Nav() {

  const avatarImg = mainStore(state=>state.Db.mySelf.avatarImg)



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
          src={avatarImg}
          onclick={() => {}}
        />
      </Flex>

    </Flex>
  );
}

export default Nav;
