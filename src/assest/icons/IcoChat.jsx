/* eslint-disable react/prop-types */
import React from 'react';

function IcoChat({
  width, height, onclick, id,
}) {
  return (
    <svg id={id} width={width} height={height} onClick={onclick} viewBox="0 0 42 39" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.9998 0.75C32.4582 0.75 41.8332 8.20833 41.8332 17.4167C41.8332 26.625 32.4582 34.0833 20.9998 34.0833C18.4165 34.0833 15.9373 33.7083 13.6457 33.0417C7.56234 38.25 0.166504 38.25 0.166504 38.25C5.02067 33.3958 5.7915 30.125 5.89567 28.875C2.354 25.8958 0.166504 21.8542 0.166504 17.4167C0.166504 8.20833 9.5415 0.75 20.9998 0.75Z" />
    </svg>
  );
}

export default IcoChat;
