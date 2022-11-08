import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import IcoArrowBack from '../../assest/icons/IcoArrowBack';
import Id from './profile/id';
import Biography from './profile/biography';
import Media from './profile/media';
import Info from './profile/Info';
import PrimaryButton from '../global/primaryButton';
import OutlinedButton from '../global/outlinedButton';

function Profile({ backwardCallback }) {
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
          backgroundImage: "url('https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png')",
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
        <IcoArrowBack />
      </Flex>
      <Info name="Siavash" lastSeen="19 min ago" />
      <Id id="siavash" />
      <Biography bio="something new" />
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
    </Flex>
  );
}

export default Profile;
