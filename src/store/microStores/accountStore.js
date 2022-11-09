const accountStore = (set, get) => ({
    isDataLoaded: false,
    setIsDataLoaded: (status) => {
      set({ isDataLoaded: status });
    },
  });
  
  export default accountStore;
  