/* eslint-disable react/prop-types */
import React from 'react';
import Text from '../../styles/styledComponents/text';

function InfoMessage({ children, styles }) {
  return (
    <Text css={{
      color: 'Darkorange',
      headline5_i: '400',
      ...styles,
    }}
    >
      {children}
    </Text>
  );
}

export default InfoMessage;
