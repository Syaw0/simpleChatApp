import React, { useState } from 'react';
import IcoArrowBack from '../assest/icons/IcoArrowBack';
import AddContact from '../components/floatPage/addContact';
import ContactsList from '../components/floatPage/contactsList';
import Profile from '../components/floatPage/profile';
import Loader from '../components/global/loader';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function FloatPage() {
  const [isLoad, setIsLoad] = useState(false);
  const [permissionForBackward, setPermissionForBackward] = useState(true);
  const [currentFloat, setCurrentFloat] = useState('profile');

  const switchPermissionForBackward = (permission) => {
    setPermissionForBackward(permission);
  };

  const goBack = (e) => {
    if (permissionForBackward) {
      console.log('backward');
    }
  };

  return (
    <Flex css={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '0',
      top: '0',
    }}
    >
      <Flex
        dir="column"
        justify="start"
        align="center"
        css={{
          width: '450px',
          height: '75%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          backgroundColor: 'White',
          borderRadius: '10px',
          boxShadow: '$8dp',
          padding: currentFloat === 'profile' ? '0' : '$1 $3',
          overflowY: 'auto',
        }}
      >
        {isLoad && <Loader />}

        {currentFloat !== 'profile' && (
        <Flex
          justify="between"
          align="center"
          css={{
            '& svg': {
              width: '25px',
              height: '25px',
              fill: '$onBg700',
              cursor: permissionForBackward ? 'poitner' : 'wait',
              '&:hover': {
                fill: '$onBg',
              },
            },
            borderBottom: '1px solid $onBg300',
            padding: '$1 0 $2 0',
          }}
        >
          <Text css={{
            headline5: '500',
            color: '$onBg900',
          }}
          >
            Contacts
          </Text>
          <IcoArrowBack onclick={goBack} />
        </Flex>
        )}

        <Profile backwardCallback={goBack} />
        {/* <AddContact switchPermissionForBackward={switchPermissionForBackward} /> */}
      </Flex>
    </Flex>
  );
}

export default FloatPage;
