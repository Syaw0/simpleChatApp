const chatEnvStore = (set, get) => ({
  currentUserChat: {},
  setCurrentUserChat: (newChat) => {
    set({ currentUserChat: newChat });
  },
});

export default chatEnvStore;
