const Db = (set, get) => ({
  Db: {},
  setDb: (newDb) => {
    set({ Db: newDb });
  },
});

export default Db;
