const pageStore = (set) => ({
  isLogin: true,

  setLoginStatus: (status) => {
    set({ isLogin: status });
  },
  whoami: 'syaw',
  setUser: (user) => {
    set({ whoami: user });
  },
});

export default pageStore;
