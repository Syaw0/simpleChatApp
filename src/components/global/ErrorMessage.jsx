/* eslint-disable react/prop-types */
import React from 'react';
import Text from '../../styles/styledComponents/text';

function ErrorMessage({ children, styles }) {
  return (
    <Text css={{
      color: '$error',
      headline5_i: '400',
      ...styles,
    }}
    >
      {children}
    </Text>
  );
}

export default ErrorMessage;
