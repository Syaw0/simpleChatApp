/* eslint-disable react/prop-types */
import React from 'react';
import Text from '../../styles/styledComponents/text';

function SuccessMessage({ children, styles }) {
  return (
    <Text css={{
      color: 'SeaGreen',
      headline5_i: '400',
      ...styles,
    }}
    >
      {children}
    </Text>
  );
}

export default SuccessMessage;
