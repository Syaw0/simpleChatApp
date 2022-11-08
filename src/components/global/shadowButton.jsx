/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../styles/styledComponents/button';

function ShadowButton({
  children, name, id, onclick, disabled,
}) {
  return (
    <Button
      disabled={disabled}
      css={{
        backgroundColor: 'transparent',
        color: '$onBg500',
        padding: '$1 $4',
        headline6: '400',
        '&:hover': {
          color: '$onBg',
        },
        '&:disabled': {
          backgroundColor: 'transparent',

        },
      }}
      name={name}
      id={id}
      onClick={onclick}
    >
      {children}
    </Button>
  );
}

export default ShadowButton;
