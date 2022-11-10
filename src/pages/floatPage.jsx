/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import IcoArrowBack from '../assest/icons/IcoArrowBack';
import AddContact from '../components/floatPage/addContact';
import ContactsList from '../components/floatPage/contactsList';
import Profile from '../components/floatPage/profile';
import Setting from '../components/floatPage/setting';
import Assurance from '../components/floatPage/setting/assurance';
import ProfileChangeInput from '../components/floatPage/setting/profileChangeInput';
import ProfileSetting from '../components/floatPage/setting/profileSetting';
import Loader from '../components/global/loader';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';
import handleOpeningFloat from '../utility/floatPage/handleOpeningFloat';

function FloatPage() {
  const [isLoad, setIsLoad] = useState(false);
  const [permissionForBackward, setPermissionForBackward] = useState(true);
  const whichFloatComponent = mainStore((state) => state.whichFloatComponent);
  const floatTitle = mainStore((state) => state.floatTitle);
  const breadFloat = mainStore((state) => state.breadFloat);
  const Db = mainStore((state) => state.Db);

  const switchPermissionForBackward = (permission) => {
    setPermissionForBackward(permission);
  };

  const goBack = (e) => {
    if (permissionForBackward) {
      if (breadFloat.length === 1) {
        handleOpeningFloat(breadFloat[breadFloat.length - 2], true, true);
        return;
      }
      handleOpeningFloat(breadFloat[breadFloat.length - 2], true);
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
          '@bp4': {
            width: '100%',
            height: '100%',
          },
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          backgroundColor: 'White',
          borderRadius: '10px',
          boxShadow: '$8dp',
          padding: whichFloatComponent === 'profile' ? '0' : '$1 $3',
          overflowY: 'auto',
        }}
      >
        {isLoad && <Loader />}

        {floatTitle !== 'profile' && (
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
            {floatTitle}
          </Text>
          <IcoArrowBack onclick={goBack} />
        </Flex>
        )}

        {whichFloatComponent === 'Setting' && <Setting />}
        {whichFloatComponent === 'Contact' && <ContactsList />}
        {whichFloatComponent === 'addContact' && <AddContact />}
        {whichFloatComponent === 'chatAvatar' && <Profile backwardCallback={goBack} />}
        {whichFloatComponent === 'navAvatar' && <Profile backwardCallback={goBack} />}
        {whichFloatComponent === 'assurance' && <Assurance />}
        {whichFloatComponent === 'profileSetting' && <ProfileSetting />}

        {whichFloatComponent === 'changeName' && (
        <ProfileChangeInput
          permissionForBackward={switchPermissionForBackward}
          title="name"
          value={Db.mySelf.name}
          info="enter an optional name for your profile"
        />
        )}
        {whichFloatComponent === 'changeBio' && (
        <ProfileChangeInput
          permissionForBackward={switchPermissionForBackward}
          title="biography"
          value={Db.mySelf.bio}
          info="inform your contact from yourself with brief description"
        />
        )}
        {whichFloatComponent === 'changeId' && (
        <ProfileChangeInput
          permissionForBackward={switchPermissionForBackward}
          title="id"
          value={Db.mySelf.id}
          info="choose your username uniq
           , you can not use  symbols  , just number and english letters"
        />
        )}

      </Flex>
    </Flex>
  );
}

export default FloatPage;
