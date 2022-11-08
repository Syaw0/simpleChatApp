/* eslint-disable react/prop-types */
import React from 'react';
import IcoAllMessage from '../../../assest/icons/IcoAllMessage';
import IcoOther from '../../../assest/icons/IcoOther';
import IcoPhotos from '../../../assest/icons/IcoPhotos';
import IcoVideos from '../../../assest/icons/IcoVideos';
import Flex from '../../../styles/styledComponents/flex';
import Text from '../../../styles/styledComponents/text';
import MediaBox from './mediaBox';

function Media({ mediaCount }) {
  return (
    <Flex
      dir="column"
      css={{
      }}
    >
      <Text css={{
        width: '100%',
        borderBottom: '1px solid $onBg300',
        subhead1_i: '400',
        color: '$onBg900',
        padding: '2px 0',
      }}
      >
        Media
      </Text>
      <MediaBox name="All Message" Icon={IcoAllMessage} value="2000" />
      <MediaBox name="Photos" Icon={IcoPhotos} value="222" />
      <MediaBox name="Videos" Icon={IcoVideos} value="13" />
      <MediaBox name="Other" Icon={IcoOther} value="144 " />
    </Flex>
  );
}

export default Media;
