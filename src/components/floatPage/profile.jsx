/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import IcoArrowBack from '../../assest/icons/IcoArrowBack';
import Id from './profile/id';
import Biography from './profile/biography';
import Media from './profile/media';
import Info from './profile/Info';
import PrimaryButton from '../global/primaryButton';
import OutlinedButton from '../global/outlinedButton';
import mainStore from '../../store/mainStore';

function Profile({ backwardCallback }) {
  const currentProfile = mainStore((state) => state.currentProfile);
  const Db = mainStore((state) => state.Db);

  return (
    <Flex
      dir="column"
      justify="start"
      align="center"
      css={{
        '&>*:not(#profileImg)': {
          padding: '$2 $3',
        },
      }}
    >
      <Flex
        id="profileImg"
        css={{
          position: 'relative',
          borderRadius: '10px',
          height: '270px',
          backgroundImage: `url('${currentProfile.avatarImg}')`,
          bgCentering: '',
          '& svg': {
            width: '25px',
            height: '25px',
            fill: '$onPrimary800',
            position: 'absolute',
            right: '20px',
            top: '10px',
            '&:hover': {
              fill: '$onPrimary',
            },
          },
        }}
      >
        <IcoArrowBack onclick={backwardCallback} />
      </Flex>
      <Info name={currentProfile.name} lastSeen={currentProfile.lastSeen} />
      <Id id={currentProfile.id} />
      <Biography bio={currentProfile.bio} />
      {Db.mySelf.id !== currentProfile.id && (
      <>
        <Media mediaCount={{}} />
        <Flex dir="column" css={{ padding: '0 $3' }}>
          <PrimaryButton styles={{
            width: '100%',
            backgroundColor: '$error',
            color: '$onError',
            border: '1px solid $error',
            '&:hover': {
              backgroundColor: '$onError',
              color: '$error',
            },

          }}
          >
            Delete Chat

          </PrimaryButton>

          <OutlinedButton styles={{
            marginTop: '10px',
            border: '1px solid $error',
            color: '$error',
            '&:hover': {
              color: '$onError',
              backgroundColor: '$error',
            },
          }}
          >
            Delete Contact
          </OutlinedButton>

        </Flex>
      </>
      )}
    </Flex>
  );
}

export default Profile;
