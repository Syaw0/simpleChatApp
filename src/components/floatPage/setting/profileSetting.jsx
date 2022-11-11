import React, { useState } from 'react';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import Input from '../../../styles/styledComponents/input';
import handleOpeningFloat from '../../../utility/floatPage/handleOpeningFloat';
import Avatar from '../../global/avatar';
import OutlinedButton from '../../global/outlinedButton';
import Biography from '../profile/biography';
import Id from '../profile/id';
import Name from './name';

function ProfileSetting() {
  const [isToolTipOne, setIsToolTipOne] = useState(false);
  const Db = mainStore((state) => state.Db);
  const socketControl = mainStore((state) => state.socketControl);

  const handleFileInput = (e) => {
    socketControl.changeAvatarImg(e.target.files[0], Db.mySelf.id);
    setIsToolTipOne(false);
  };

  const handleClickAvatar = () => {
    setIsToolTipOne(true);
  };

  const handleAvatarChangeClick = () => {
    socketControl.deleteAvatarImg(Db.mySelf.id);
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
          src={Db.mySelf.avatarImg}
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
          <OutlinedButton
            css={{
              position: 'relative',
              zIndex: '2',
            }}
          >
            <Input
              accept="image/*"
              onChange={handleFileInput}
              type="file"
              css={{
                opacity: '0',
                position: 'absolute',
                zIndex: '3',
                cursor: 'pointer',
                '& *': {
                  cursor: 'pointer',
                },
                width: '100%',
                height: '100%',
              }}
            />
            Select new avatar
          </OutlinedButton>

          <OutlinedButton onclick={handleAvatarChangeClick}>
            Delete an avatar
          </OutlinedButton>
        </Flex>
        )}

      </Flex>

      <Name name={Db.mySelf.name} onclick={() => { handleOpeningFloat('changeName'); }} />
      <Id id={Db.mySelf.id} />
      {/* onclick={() => { handleOpeningFloat('changeId'); }} */}
      <Biography bio={Db.mySelf.bio} onclick={() => { handleOpeningFloat('changeBio'); }} />

    </Flex>
  );
}
export default ProfileSetting;
