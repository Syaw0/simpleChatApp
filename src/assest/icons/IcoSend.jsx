/* eslint-disable react/prop-types */
import React from 'react';

function IcoSend({
  width, height, onclick, id,
}) {
  return (
    <svg id={id} width={width} height={height} onClick={onclick} viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.916992 27.125L31.542 14L0.916992 0.875V11.0833L22.792 14L0.916992 16.9167V27.125Z" />
    </svg>
  );
}

export default IcoSend;
