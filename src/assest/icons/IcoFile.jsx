/* eslint-disable react/prop-types */
import React from 'react';

function IcoFile({
  width, height, onclick, id,
}) {
  return (

    <svg id={id} width={width} height={height} onClick={onclick} viewBox="0 0 25 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9585 10.6243V2.60352L21.9793 10.6243M3.75016 0.416016C2.13141 0.416016 0.833496 1.71393 0.833496 3.33268V26.666C0.833496 27.4396 1.14079 28.1814 1.68777 28.7284C2.23475 29.2754 2.97661 29.5827 3.75016 29.5827H21.2502C22.0237 29.5827 22.7656 29.2754 23.3126 28.7284C23.8595 28.1814 24.1668 27.4396 24.1668 26.666V9.16602L15.4168 0.416016H3.75016Z" />
    </svg>
  );
}

export default IcoFile;
