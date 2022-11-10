import React from 'react';
import mainStore from '../../store/mainStore';
import Flex from '../../styles/styledComponents/flex';
import handleOpeningFloat from '../../utility/floatPage/handleOpeningFloat';
import PrimaryButton from '../global/primaryButton';
import Contact from './contact';

function ContactsList() {
  const Db = mainStore((state) => state.Db);

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

      {Db.contacts.map((contact) => (
        <Contact
          key={contact.id}
          wholeContact={contact}
          avatarImg={contact.avatarImg}
          name={contact.name}
          lastSeen={contact.lastSeen}
        />
      ))}
      <PrimaryButton
        onclick={() => { handleOpeningFloat('addContact'); }}
        styles={{ width: '100%', marginTop: '2rem' }}
      >
        Add Contact

      </PrimaryButton>
    </Flex>
  );
}

export default ContactsList;
