/* eslint-disable react/prop-types */
import React from 'react';

function IcoAppearance({
  width, height, onclick, id,
}) {
  return (
    <svg id={id} width={width} height={height} onClick={onclick} viewBox="0 0 33 30" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.6249 20.8327H3.37492V3.33268H29.6249M29.6249 0.416016H3.37492C1.75617 0.416016 0.458252 1.71393 0.458252 3.33268V20.8327C0.458252 22.4514 1.77075 23.7493 3.37492 23.7493H13.5833V26.666H10.6666V29.5827H22.3333V26.666H19.4166V23.7493H29.6249C31.2437 23.7493 32.5416 22.4514 32.5416 20.8327V3.33268C32.5416 1.71393 31.2291 0.416016 29.6249 0.416016ZM20.8749 5.52018L19.9708 7.5181L17.9583 8.43685L19.9708 9.3556L20.8749 11.3535L21.7937 9.3556L23.7916 8.43685L21.7937 7.5181L20.8749 5.52018ZM14.3124 8.43685L12.7228 11.9514L9.20825 13.541L12.7228 15.1306L14.3124 18.6452L15.9166 15.1306L19.4166 13.541L15.9166 11.9514L14.3124 8.43685Z" />
    </svg>
  );
}

export default IcoAppearance;