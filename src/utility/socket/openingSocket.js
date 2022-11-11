import mainStore from '../../store/mainStore';
import SocketController from './socketController';

const openingSocket = async () => {
  let socketController;
  const webSocket = new WebSocket('ws://localhost:9090');
  mainStore.getState().setIsOnline(true);

  webSocket.onopen = () => {
    mainStore.getState().setIsOnline(true);
    socketController = new SocketController(webSocket);
    mainStore.getState().setSocketControl(socketController);
    socketController.executeStep1();
  };
  webSocket.onmessage = (msg) => {
    socketController.handleServerMsg(msg);
  };
  webSocket.onerror = () => {
    mainStore.getState().setIsOnline(false);
    mainStore.getState().setInfoBoxText('you are offline');
  };

  webSocket.onclose = () => {
    console.log('im closing this socket')
    mainStore.getState().setIsOnline(false);
    mainStore.getState().setInfoBoxText('you are offline');
  };
  return true;
};

export default openingSocket;
