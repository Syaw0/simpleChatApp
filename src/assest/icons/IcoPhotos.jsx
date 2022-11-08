/* eslint-disable react/prop-types */
import React from 'react';

function IcoPhotos({
  width, height, onclick, id,
}) {
  return (
    <svg id={id} width={width} height={height} onClick={onclick} viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.39583 15.6875L12.0417 20.0625L17.1458 13.5L23.7083 22.25H3.29167M26.625 23.7083V3.29167C26.625 1.67292 25.3125 0.375 23.7083 0.375H3.29167C2.51812 0.375 1.77625 0.682291 1.22927 1.22927C0.682291 1.77625 0.375 2.51812 0.375 3.29167V23.7083C0.375 24.4819 0.682291 25.2237 1.22927 25.7707C1.77625 26.3177 2.51812 26.625 3.29167 26.625H23.7083C24.4819 26.625 25.2237 26.3177 25.7707 25.7707C26.3177 25.2237 26.625 24.4819 26.625 23.7083Z" />
    </svg>
  );
}

export default IcoPhotos;
