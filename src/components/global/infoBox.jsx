/* eslint-disable react/jsx-props-no-multi-spaces */
import React from 'react';
import mainStore from '../../store/mainStore';
import { bgAnimated } from '../../styles/keyframes';
import Flex from '../../styles/styledComponents/flex';
import Text from '../../styles/styledComponents/text';
import OutlinedButton from './outlinedButton';

function InfoBox() {
  const infoBoxText = mainStore((state) => state.infoBoxText);

  return (
    <Flex
      dir="column"
      justify="center"
      align="center"

      css={{
        width: '100%',
        height: '100%',
        backgroundColor: '$onBg900',
        animation: `${bgAnimated} 10s ease infinite`,
        color: '$bg',
        position: 'absolute',
        left: '0',
        top: '0',
      }}
    >

      <Text css={{
        color: '$bg',
        headline1_i: '500',
        textDecoration: '3px solid underline',
      }}
      >
        {infoBoxText}
      </Text>

      <OutlinedButton
        onclick={() => { window.history.go(0); }}
        styles={{
          border: '2px solid $bg',
          color: '$bg',
          marginTop: '20px',
          '&:hover': {
            backgroundColor: '$bg100',
          },
        }}
      >
        reload app
      </OutlinedButton>

    </Flex>
  );
}

export default InfoBox;
