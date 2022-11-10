const accountStore = (set) => ({
  isDataLoaded: false,
  currentRenderedComponent: 'chatList',

  setCurrentRenderedComponent: (componentName) => {
    set({ currentRenderedComponent: componentName });
  },

  setIsDataLoaded: (status) => {
    set({ isDataLoaded: status });
  },
});

export default accountStore;
