import mainStore from '../store/mainStore';

const logout = () => {
  mainStore.getState().setLoginStatus(false);
  mainStore.getState().setDb({});
  mainStore.getState().closeAndEraseFloat();
  mainStore.getState().setIsDataLoaded(false);
  mainStore.getState().setCurrentUserChat({});
  mainStore.getState().setUser('');
  document.cookie = 'hash=undefined ; max-age=1 SameSite=strict ;Secure';
  document.cookie = 'username=undefined; max-age=1 SameSite=strict ;Secure';
};

export default logout;
