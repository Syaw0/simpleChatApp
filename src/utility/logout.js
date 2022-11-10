import mainStore from '../store/mainStore';

const logout = () => {
  mainStore.getState().setLoginStatus(false);
  mainStore.getState().setDb({});
  mainStore.getState().closeAndEraseFloat();
  mainStore.getState().setIsDataLoaded(false);
  mainStore.getState().setCurrentUserChat({})
};

export default logout;
