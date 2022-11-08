/* eslint-disable react/prop-types */
import React from 'react';

function IcoArrowBack({
  width, height, onclick, id,
}) {
  return (
    <svg id={id} width={width} height={height} onClick={onclick} viewBox="0 0 27 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.625 7.54167H5.96042L11.1812 2.30625L9.125 0.25L0.375 9L9.125 17.75L11.1812 15.6792L5.96042 10.4583H26.625V7.54167Z" />
    </svg>
  );
}

export default IcoArrowBack;
