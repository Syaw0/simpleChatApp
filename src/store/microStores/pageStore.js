const pageStore = (set) => ({
  isLogin: false,

  setLoginStatus: (status) => {
    set({ isLogin: status });
  },
  whoami: '',
  setUser: (user) => {
    set({ whoami: user });
  },
  isOnline: true,
  infoBoxText: '',
  setInfoBoxText: (text) => {
    set({ infoBoxText: text });
  },
  setIsOnline: (status) => {
    set({ isOnline: status });
  },
});

export default pageStore;
