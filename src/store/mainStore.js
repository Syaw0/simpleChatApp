import create from 'zustand';
import accountStore from './microStores/accountStore';
import chatEnvStore from './microStores/chatEnvStore';
import Db from './microStores/Db';
import pageStore from './microStores/pageStore';

export default create((set, get) => ({

  ...pageStore(set, get),
  ...accountStore(set, get),
  ...Db(set, get),
  ...chatEnvStore(set, get),
}));
