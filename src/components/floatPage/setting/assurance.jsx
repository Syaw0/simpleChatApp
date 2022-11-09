import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import PrimaryButton from '../../global/primaryButton';

function Assurance() {
  return (
    <Flex dir="column">
      <Text css={{
        headline4: '500',
        color: '$error',
        padding: '$3 0 $1 0',

      }}
      >
        Are You Sure Want To Delete Account?
      </Text>

      <Text css={{
        headline6_i: '400',
        color: '$onBg900',
      }}
      >
        by this action all of your data will lost
        involve: chats , medias , setting config , etc..
      </Text>

      <Flex
        dir="column"
        css={{
          marginTop: '$4',
          '& button': {
            marginTop: '$1',
          },
        }}
      >
        <PrimaryButton>
          Cancel
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
          Delete
        </PrimaryButton>
      </Flex>

    </Flex>
  );
}

export default Assurance;
