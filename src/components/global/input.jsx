/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../../styles/styledComponents/flex';

function Input({
  type, onchange, value, label, name, placeholder, disabled, styles,
}) {
  return (
    <Flex
      dir="column"
      css={{

        '& label': {
          headline5: '500',
          color: '$onBg900',
          padding: '$1 0',
        },

        '& input': {
          border: '1px solid $onBg300',
          borderRadius: '10px',
          padding: '$1 $2',
          color: '$onBg',
          headline6: '500',
          marginBottom: '$2',
          '&:disabled': {
            backgroundColor: '$onBg100',
            cursor: 'wait',
          },
          '&::placeholder': {
            headline6_i: '400',
          },
          '&:focus': {
            backgroundColor: '$primary100',
          },
        },
        ...styles,
      }}
    >
      <label htmlFor={name}>{label}</label>
      <input
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onchange}
      />
    </Flex>
  );
}

export default Input;
