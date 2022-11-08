import React from 'react';
import Flex from '../../styles/styledComponents/flex';
import PrimaryButton from '../global/primaryButton';
import Contact from './contact';

function ContactsList() {
  return (
    <Flex
      dir="column"
      justify="start"
      align="center"
      css={{
        padding: '$1 0',
        overflowY: 'auto',
      }}
    >
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <Contact />
      <PrimaryButton
        styles={{ width: '100%', marginTop: '2rem' }}
      >
        Add Contact

      </PrimaryButton>
    </Flex>
  );
}

export default ContactsList;
