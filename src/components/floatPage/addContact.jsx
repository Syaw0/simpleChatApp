/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import ErrorMessage from '../global/ErrorMessage';
import InfoMessage from '../global/infoMessage';
import Input from '../global/input';
import PrimaryButton from '../global/primaryButton';
import SuccessMessage from '../global/successMessage';

import handleOpeningFloat from '../../utility/floatPage/handleOpeningFloat';

function AddContact({ permissionForBackward }) {
  const [username, setUsername] = useState('');
  const socketControl = mainStore((state) => state.socketControl);
  const responseForAddContact = mainStore((state) => state.responseForAddContact);
  const setResponseForAddContact = mainStore((state) => state.setResponseForAddContact);
  const Db = mainStore((state) => state.Db);

  useEffect(() => {
    if (responseForAddContact.status === 'waiting') {
      permissionForBackward(false);
    } else {
      if (responseForAddContact.status === 'success') {
        setTimeout(() => {
          handleOpeningFloat('Contact', true);
          permissionForBackward(true);
          setResponseForAddContact({ status: '', msg: '' });
        }, 2000);
        return;
      }
      permissionForBackward(true);
    }
  }, [responseForAddContact.status]);

  const searchAndAddContact = async () => {
    if (username.trim() === '') {
      setResponseForAddContact({ status: 'reject', msg: 'input must have value' });
      return;
    }
    setResponseForAddContact({ status: 'waiting', msg: 'wait until server Response' });
    permissionForBackward(false);
    socketControl.addContact(username, Db.mySelf.id);
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
        disabled={responseForAddContact.status === 'waiting' || responseForAddContact.status === 'success'}
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
        disabled={responseForAddContact.status === 'waiting' || responseForAddContact.status === 'success'}
        onclick={searchAndAddContact}
        styles={{ marginTop: '3rem', width: '100%' }}
      >
        Search And Add

      </PrimaryButton>

      {responseForAddContact.status === 'reject'
       && <ErrorMessage>{responseForAddContact.msg}</ErrorMessage>}

      {responseForAddContact.status === 'success'
       && <SuccessMessage>{responseForAddContact.msg}</SuccessMessage>}

      {responseForAddContact.status === 'waiting'
       && <InfoMessage>{responseForAddContact.msg}</InfoMessage>}

    </Flex>
  );
}

export default AddContact;
