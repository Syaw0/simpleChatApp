const pageStore = (set, get) => ({
  isLogin: false,
  setLoginStatus: (status) => {
    set({ isLogin: status });
  },
});

export default pageStore;
