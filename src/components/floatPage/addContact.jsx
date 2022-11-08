/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Flex from '../../styles/styledComponents/flex';
import Input from '../global/input';
import PrimaryButton from '../global/primaryButton';

function AddContact({ switchPermissionForBackward }) {
  const [username, setUsername] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);

  const searchAndAddContact = () => {
    setIsWaiting(true);
    switchPermissionForBackward(false);
  };

  const usernameInputChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <Flex
      dir="column"
      justify="center"
      align="center"
      css={{
        height: '100%',
      }}
    >
      <Input
        disabled={isWaiting}
        label="your friend username"
        name="addContactInput"
        type="text"
        value={username}
        onchange={usernameInputChange}
        placeholder="enter the target username"
        styles={{
          '& label': {
            headline6: '500',
            padding: '8px 0',
          },
        }}
      />
      <PrimaryButton
        disabled={isWaiting}
        onclick={searchAndAddContact}
        styles={{ marginTop: '3rem', width: '100%' }}
      >
        Search And Add

      </PrimaryButton>
    </Flex>
  );
}

export default AddContact;
