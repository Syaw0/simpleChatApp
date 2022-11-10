import React, { useState } from 'react';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import handleOpeningFloat from '../../../utility/floatPage/handleOpeningFloat';
import Avatar from '../../global/avatar';
import OutlinedButton from '../../global/outlinedButton';
import Biography from '../profile/biography';
import Id from '../profile/id';
import Name from './name';

function ProfileSetting() {
  const [isToolTipOne, setIsToolTipOne] = useState(false);
  const Db = mainStore((state) => state.Db);

  const handleClickAvatar = () => {
    setIsToolTipOne(true);
  };

  const handleAvatarChangeClick = () => {
    setIsToolTipOne(false);
  };

  return (
    <Flex
      dir="column"
      css={{
        '&>div': {
          marginBottom: '$2',
        },
      }}
    >

      <Flex
        justify="center"
        align="center"
        css={{
          padding: '$4 0',
          position: 'relative',
        }}
      >
        <Avatar
          onclick={handleClickAvatar}
          height="100px"
          width="100px"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png"
        />

        {isToolTipOne && (
        <Flex
          dir="column"
          css={{
            position: 'absolute',
            width: 'fit-content',
            right: '50px',
            bottom: '0',
            backgroundColor: '$onBg900',
            '& button': {
              subhead1: '500',
              padding: '$1',
              borderRadius: '0px',
              color: '$bg900',
              border: 'none',
              '&:hover': {
                color: '$onBg900',
                backgroundColor: '$bg800',
              },

            },
          }}
        >
          <OutlinedButton onclick={handleAvatarChangeClick}>
            Select new avatar
          </OutlinedButton>

          <OutlinedButton onclick={handleAvatarChangeClick}>
            Delete an avatar
          </OutlinedButton>
        </Flex>
        )}

      </Flex>

      <Name name={Db.mySelf.name} onclick={() => { handleOpeningFloat('changeName'); }} />
      <Id id={Db.mySelf.id} onclick={() => { handleOpeningFloat('changeId'); }} />
      <Biography bio={Db.mySelf.biography} onclick={() => { handleOpeningFloat('changeBio'); }} />

    </Flex>
  );
}
export default ProfileSetting;
