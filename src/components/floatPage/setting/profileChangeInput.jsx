/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import handleOpeningFloat from '../../../utility/floatPage/handleOpeningFloat';
import ErrorMessage from '../../global/ErrorMessage';
import Input from '../../global/input';
import PrimaryButton from '../../global/primaryButton';
import SuccessMessage from '../../global/successMessage';

function ProfileChangeInput({
  title, value, info, permissionForBackward,
}) {
  const [message, setMessage] = useState({ type: '', msg: '' });
  const [isWaiting, setIsWaiting] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputChangeCallback = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeClick = () => {
    if (inputValue.trim() === '') {
      setMessage({ type: 'error', msg: 'input must have value' });
      return;
    }

    setIsWaiting(true);
    permissionForBackward(false);
    const result = true;
    if (result) {
      setMessage({ type: 'success', msg: `succussfully change your ${title}` });
      setTimeout(() => {
        setIsWaiting(false);
        permissionForBackward(true);
        handleOpeningFloat('profileSetting', true);
      }, 2000);
    } else {
      setMessage({ type: 'error', msg: 'failed durring operation...' });
      setTimeout(() => {
        setIsWaiting(false);
        permissionForBackward(true);
      }, 2000);
    }
  };

  return (
    <Flex dir="column">

      <Text css={{
        subhead1: '500',
        color: '$onBg900',
        padding: '$3 0 $2 0',
      }}
      >
        {info}
      </Text>

      <Text css={{
        width: '100%',
        borderBottom: '1px solid $onBg300',
        subhead1_i: '400',
        color: '$onBg900',
        padding: '2px 0',
      }}
      >
        {title}
      </Text>

      <Input
        disabled={isWaiting}
        type="text"
        value={inputValue}
        placeholder={`enter your ${title}`}
        onchange={inputChangeCallback}
        name="id"
      />

      <PrimaryButton
        onclick={handleChangeClick}
        disabled={isWaiting}
        styles={{
          padding: '$1',
        }}
      >
        Change
        {' '}
        {title}
      </PrimaryButton>

      {message.type === 'success' && <SuccessMessage>{message.msg}</SuccessMessage> }
      {message.type === 'error' && <ErrorMessage>{message.msg}</ErrorMessage> }

    </Flex>
  );
}
export default ProfileChangeInput;
