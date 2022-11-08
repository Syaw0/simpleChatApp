/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../../styles/styledComponents/flex';

function Avatar({
  width, height, src, onclick,
}) {
  return (
    <Flex
      css={{
        width,
        height,
        borderRadius: '50%',
        backgroundImage: `url('${src}')`,
        bgCentering: '',
        cursor: 'pointer',
      }}
      onClick={onclick}
    />
  );
}

export default Avatar;
