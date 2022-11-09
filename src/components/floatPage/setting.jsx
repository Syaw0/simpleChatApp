import React from 'react';
import IcoAppearance from '../../assest/icons/IcoAppearance';
import IcoProfile from '../../assest/icons/IcoProfile';
import Flex from '../../styles/styledComponents/flex';
import PrimaryButton from '../global/primaryButton';
import ShadowButton from '../global/shadowButton';

function Setting() {
  return (
    <Flex
      justify="between"
      dir="column"
      css={{
        height: '100%',
        '& svg': {
          width: '30px',
          height: '30px',
          marginRight: '$1',
          fill: '$onBg700',

        },
        '& button': {
          display: 'flex',
          justifyContent: 'start',
          width: '100%',
          borderBottom: '1px solid $onBg100',
          padding: '$2 $1',
          // margin:"$1 0",
          '&:hover': {
            backgroundColor: '$onBg100',
            '& svg': {
              fill: '$onBg',
            },
          },

        },

      }}
    >
      <Flex dir="column">
        <ShadowButton id="settingShadowBtn">
          <IcoAppearance />
          Appearance
        </ShadowButton>

        <ShadowButton id="settingShadowBtn">
          <IcoProfile />
          Profile
        </ShadowButton>
      </Flex>

      <Flex
        justify="end"
        align="end"
        dir="column"
        css={{
          '& button': {
            marginTop: '$1',
            padding: '$1',
            textAlign: 'center',
            justifyContent: 'center',
          },
        }}
      >

        <PrimaryButton>
          Logout
        </PrimaryButton>

        <PrimaryButton styles={{
          backgroundColor: '$error',
          border: '1px solid $error',
          '&:hover': {
            color: '$error',
            backgroundColor: '$onError',
          },
        }}
        >
          Delete Account
        </PrimaryButton>

      </Flex>

    </Flex>
  );
}

export default Setting;
