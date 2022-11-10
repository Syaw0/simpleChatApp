import React from 'react';
import IcoContacts from '../../assest/icons/IcoContacts';
import IcoSetting from '../../assest/icons/IcoSetting';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import handleOpeningFloat from '../../utility/floatPage/handleOpeningFloat';
import Avatar from '../global/avatar';

function Nav() {
  const Db = mainStore((state) => state.Db);
  const setCurrentProfile = mainStore((state) => state.setCurrentProfile);

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

        <IcoSetting id="Setting" onclick={handleOpeningFloat} />
        <IcoContacts id="Contact" onclick={handleOpeningFloat} />

        <Avatar
          id="navAvatar"
          width="50px"
          height="50px"
          src={Db.mySelf.avatarImg}
          onclick={(e) => {
            handleOpeningFloat(e);
            setCurrentProfile(Db.mySelf);
          }}
        />
      </Flex>

    </Flex>
  );
}

export default Nav;
