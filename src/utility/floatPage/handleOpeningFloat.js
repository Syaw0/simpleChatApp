/* eslint-disable no-use-before-define */
import mainStore from '../../store/mainStore';

const handleOpeningFloat = (e, isItBackward, isItLastOne) => {
  if (isItLastOne) {
    mainStore.getState().setFloatStatus(false);
    mainStore.getState().eraseBreadFloat();
    return;
  }
  let floatType;
  if (e.currentTarget) {
    floatType = e.currentTarget.id;
  } else {
    floatType = e;
  }
  mainStore.getState().setFloatStatus(true);
  mainStore.getState().setWhichFloatComponent(floatType);
  mainStore.getState().setFloatTitle(floatNodeName[floatType]);
  if (!isItBackward) {
    mainStore.getState().appendToBreadFloat(floatType);
  } else {
    mainStore.getState().rmLastBread();
  }
};

const floatNodeName = {
  Setting: 'Setting',
  Contact: 'Contacts',
  chatAvatar: 'profile',
  navAvatar: 'profile',
  addContact: 'Add Contact',
  profileSetting: 'Customize Profile',
  changeId: 'Customize Profile',
  changeName: 'Customize Profile',
  changeBio: 'Customize Profile',
};

export default handleOpeningFloat;
