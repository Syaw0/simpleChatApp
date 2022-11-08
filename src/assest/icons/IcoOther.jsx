/* eslint-disable react/prop-types */
import React from 'react';

function IcoOther({
  width, height, onclick, id,
}) {
  return (
    <svg id={id} width={width} height={height} onClick={onclick} viewBox="0 0 25 31" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9585 11.1243H21.9793L13.9585 3.10352V11.1243ZM3.75016 0.916016H15.4168L24.1668 9.66602V27.166C24.1668 27.9396 23.8595 28.6814 23.3126 29.2284C22.7656 29.7754 22.0237 30.0827 21.2502 30.0827H3.75016C2.13141 30.0827 0.833496 28.7702 0.833496 27.166V3.83268C0.833496 2.21393 2.13141 0.916016 3.75016 0.916016ZM16.8752 24.2493V21.3327H3.75016V24.2493H16.8752ZM21.2502 18.416V15.4993H3.75016V18.416H21.2502Z" />
    </svg>
  );
}

export default IcoOther;
