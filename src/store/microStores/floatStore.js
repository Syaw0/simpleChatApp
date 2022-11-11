const floatStore = (set, get) => ({
  isFloatOpen: false,
  floatTitle: '',
  whichFloatComponent: '',
  responseForAddContact: { status: '', msg: '' }, // waiting , reject , success
  breadFloat: [],
  currentProfile: {},

  setResponseForAddContact: (newResponse) => {
    set({ responseForAddContact: newResponse });
  },

  setCurrentProfile: (profileData) => {
    set({ currentProfile: profileData });
  },
  appendToBreadFloat: (newFloat) => {
    set((state) => ({ breadFloat: [...state.breadFloat, newFloat] }));
  },

  rmLastBread: () => {
    let newBread = get().breadFloat;
    newBread = newBread.slice(0, newBread.length - 1);
    set({ breadFloat: newBread });
  },

  eraseBreadFloat: () => {
    set({ breadFloat: [] });
  },

  closeAndEraseFloat: () => {
    get().eraseBreadFloat();
    set({ isFloatOpen: false });
  },

  setFloatTitle: (title) => {
    set({ floatTitle: title });
  },

  setWhichFloatComponent: (component) => {
    set({ whichFloatComponent: component });
  },

  setFloatStatus: (status) => {
    set({ isFloatOpen: status });
  },
});

export default floatStore;
