const chatEnvStore = (set) => ({
  currentUserChat: {},
  setCurrentUserChat: (newChat) => {
    set({ currentUserChat: newChat });
  },
});

export default chatEnvStore;
