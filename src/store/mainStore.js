import create from 'zustand';
import accountStore from './microStores/accountStore';
import chatEnvStore from './microStores/chatEnvStore';
import Db from './microStores/Db';
import floatStore from './microStores/floatStore';
import pageStore from './microStores/pageStore';
import socketStore from './microStores/socketStore';

export default create((set, get) => ({

  ...pageStore(set, get),
  ...accountStore(set, get),
  ...Db(set, get),
  ...chatEnvStore(set, get),
  ...floatStore(set, get),
  ...socketStore(set, get),
}));
