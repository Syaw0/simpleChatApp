/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import mainStore from '../../../store/mainStore';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import handleOpeningFloat from '../../../utility/floatPage/handleOpeningFloat';
import ErrorMessage from '../../global/ErrorMessage';
import InfoMessage from '../../global/infoMessage';
import Input from '../../global/input';
import PrimaryButton from '../../global/primaryButton';
import SuccessMessage from '../../global/successMessage';

function ProfileChangeInput({
  title, value, info, permissionForBackward,
}) {
  const [message, setMessage] = useState({ type: '', msg: '' });
  const [isWaiting, setIsWaiting] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const responseForEditProfile = mainStore((state) => state.responseForAddContact);
  const setResponseForEditProfile = mainStore((state) => state.setResponseForAddContact);
  const socketControl = mainStore((state) => state.socketControl);
  const Db = mainStore((state) => state.Db);

  useEffect(() => {
    if (responseForEditProfile.status === 'waiting') {
      permissionForBackward(false);
    } else {
      if (responseForEditProfile.status === 'success') {
        setTimeout(() => {
          handleOpeningFloat('profileSetting', true);
          permissionForBackward(true);
          setResponseForEditProfile({ status: '', msg: '' });
        }, 2000);
        return;
      }
      permissionForBackward(true);
    }
  }, [responseForEditProfile.status]);

  const inputChangeCallback = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeClick = () => {
    if (inputValue.trim() === '') {
      setResponseForEditProfile({ status: 'reject', msg: 'input must have value' });
      return;
    }
    if (title === 'name') {
      socketControl.changeProfileName(Db.mySelf.id, inputValue);
    } else {
      socketControl.changeProfileBio(Db.mySelf.id, inputValue);
    }

    permissionForBackward(false);
    setResponseForEditProfile({ status: 'waiting', msg: 'we are edit your profile' });
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
        disabled={responseForEditProfile.status === 'waiting' || responseForEditProfile.status === 'success'}
        type="text"
        value={inputValue}
        placeholder={`enter your ${title}`}
        onchange={inputChangeCallback}
        name="id"
      />

      <PrimaryButton
        onclick={handleChangeClick}
        disabled={responseForEditProfile.status === 'waiting' || responseForEditProfile.status === 'success'}
        styles={{
          padding: '$1',
        }}
      >
        Change
        {' '}
        {title}
      </PrimaryButton>

      {responseForEditProfile.status === 'success' && <SuccessMessage>{responseForEditProfile.msg}</SuccessMessage> }
      {responseForEditProfile.status === 'reject' && <ErrorMessage>{responseForEditProfile.msg}</ErrorMessage> }
      {responseForEditProfile.status === 'waiting' && <InfoMessage>{responseForEditProfile.msg}</InfoMessage> }

    </Flex>
  );
}
export default ProfileChangeInput;
