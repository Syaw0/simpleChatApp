/* eslint-disable react/prop-types */
import React from 'react';

function IcoVideos({
  width, height, onclick, id,
}) {
  return (
    <svg id={id} width={width} height={height} onClick={onclick} viewBox="0 0 27 19" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.7917 7.3125V2.20833C20.7917 1.82156 20.638 1.45063 20.3645 1.17714C20.091 0.903646 19.7201 0.75 19.3333 0.75H1.83333C1.44656 0.75 1.07563 0.903646 0.802136 1.17714C0.528645 1.45063 0.375 1.82156 0.375 2.20833V16.7917C0.375 17.1784 0.528645 17.5494 0.802136 17.8229C1.07563 18.0964 1.44656 18.25 1.83333 18.25H19.3333C19.7201 18.25 20.091 18.0964 20.3645 17.8229C20.638 17.5494 20.7917 17.1784 20.7917 16.7917V11.6875L26.625 17.5208V1.47917L20.7917 7.3125Z" />
    </svg>
  );
}

export default IcoVideos;
