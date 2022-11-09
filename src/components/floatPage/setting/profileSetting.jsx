import React from 'react';
import Flex from '../../../styles/styledComponents/flex';
import Avatar from '../../global/avatar';
import Biography from '../profile/biography';
import Id from '../profile/id';
import Name from './name';

function ProfileSetting() {
  return (
    <Flex
      dir="column"
      css={{
        '&>div': {
          marginBottom: '$2',
        },
      }}
    >

      <Flex
        justify="center"
        align="center"
        css={{
          padding: '$4 0',
        }}
      >
        <Avatar
          height="100px"
          width="100px"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/04/reverse-image-search-627b7e49986b0-sej-760x400.png"
        />
      </Flex>

      <Name name="sivash" />
      <Id id="siavash" />
      <Biography bio="something new" />

    </Flex>
  );
}
export default ProfileSetting;
