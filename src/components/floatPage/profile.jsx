/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Flex from '../../styles/styledComponents/flex';
import IcoArrowBack from '../../assest/icons/IcoArrowBack';
import Id from './profile/id';
import Biography from './profile/biography';
import Media from './profile/media';
import Info from './profile/Info';
import PrimaryButton from '../global/primaryButton';
import OutlinedButton from '../global/outlinedButton';
import mainStore from '../../store/mainStore';
import handleOpeningFloat from '../../utility/floatPage/handleOpeningFloat';

function Profile({ backwardCallback }) {
  const currentProfile = mainStore((state) => state.currentProfile);
  const Db = mainStore((state) => state.Db);
  const isChatAvailable = Db.chats.find((chat) => chat.targetId.id === currentProfile.id);
  const isContactAvailable = Db.contacts.find((cts) => cts.id === currentProfile.id);
  const socketControl = mainStore((state) => state.socketControl);
  const setCurrentUserChat = mainStore((state) => state.setCurrentUserChat);
  const closeAndEraseFloat = mainStore((state) => state.closeAndEraseFloat);
  const setCurrentProfile = mainStore(state=>state.setCurrentProfile);


  useEffect(()=>{
    console.log('changed')

    if(currentProfile.id === Db.mySelf.id){
      setCurrentProfile(Db.mySelf)
    }else{
      const user = Db.contacts.find((cts)=>cts.id === currentProfile.id)
      if(user){
        setCurrentProfile(user)
      }
      
    }
console.log(currentProfile)

  },[Db])

  const deleteContact = () => {
    socketControl.deleteContact(Db.mySelf.id, currentProfile.id);
    handleOpeningFloat('Contact', true);
  };

  const deleteChat = () => {
    socketControl.deleteChat(Db.mySelf.id, currentProfile.id);
    setCurrentUserChat({});
    closeAndEraseFloat();
  };

  return (
    <Flex
      dir="column"
      justify="start"
      align="center"
      css={{
        '&>*:not(#profileImg)': {
          padding: '$2 $3',
        },
      }}
    >
      <Flex
        id="profileImg"
        css={{
          position: 'relative',
          borderRadius: '10px',
          height: '270px',
          backgroundImage: `url('${currentProfile.avatarImg}')`,
          bgCentering: '',
          '& svg': {
            width: '25px',
            height: '25px',
            fill: '$onPrimary800',
            position: 'absolute',
            right: '20px',
            top: '10px',
            '&:hover': {
              fill: '$onPrimary',
            },
          },
        }}
      >
        <IcoArrowBack onclick={backwardCallback} />
      </Flex>
      <Info name={currentProfile.name} lastSeen={currentProfile.lastSeen} />
      <Id id={currentProfile.id} />
      <Biography bio={currentProfile.bio} />
      {Db.mySelf.id !== currentProfile.id && (
      <>
        <Media mediaCount={{}} />
        <Flex dir="column" css={{ padding: '0 $3' }}>
          {isChatAvailable && (
          <PrimaryButton
            onclick={deleteChat}
            styles={{
              width: '100%',
              backgroundColor: '$error',
              color: '$onError',
              border: '1px solid $error',
              '&:hover': {
                backgroundColor: '$onError',
                color: '$error',
              },

            }}
          >
            Delete Chat

          </PrimaryButton>
          )}

          {isContactAvailable && (
          <OutlinedButton
            onclick={deleteContact}
            styles={{
              marginTop: '10px',
              border: '1px solid $error',
              color: '$error',
              '&:hover': {
                color: '$onError',
                backgroundColor: '$error',
              },
            }}
          >
            Delete Contact
          </OutlinedButton>
          )}

        </Flex>
      </>
      )}
    </Flex>
  );
}

export default Profile;
