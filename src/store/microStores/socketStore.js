const socketStore = (set) => ({
  socketControl: null,
  setSocketControl: (ws) => {
    set({ socketControl: ws });
  },
});

export default socketStore;
