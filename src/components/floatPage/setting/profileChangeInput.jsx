/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import Input from '../../global/input';
import PrimaryButton from '../../global/primaryButton';
import SuccessMessage from '../../global/successMessage';

function ProfileChangeInput({ title, value, info }) {
  const [isWaiting, setIsWaiting] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputChangeCallback = (e) => {
    setInputValue(e.target.value);
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
        placeholder="your username"
        onchange={inputChangeCallback}
        name="id"
      />

      <PrimaryButton
        disabled={isWaiting}
        styles={{
          padding: '$1',
        }}
      >
        Change
        {' '}
        {title}
      </PrimaryButton>

      {/* <SuccessMessage>successfully changed {title}</SuccessMessage> */}

    </Flex>
  );
}
export default ProfileChangeInput;
