/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../../styles/styledComponents/button';

function PrimaryButton({
  children, name, id, onclick, disabled, styles,
}) {
  return (
    <Button
      disabled={disabled}
      css={{
        backgroundColor: '$primary',
        color: '$onPrimary',
        padding: '$1 $4',
        borderRadius: '10px',
        headline5: '500',
        letterSpacing: '1px',
        justifyContent: 'center',
        border: '2px solid $primary',
        '&:hover': {
          background: '$primary200',
          color: '$primary',
        },
        ...styles,
      }}
      name={name}
      id={id}
      onClick={onclick}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
