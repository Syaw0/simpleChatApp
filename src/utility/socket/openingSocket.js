import mainStore from '../../store/mainStore';
import SocketController from './socketController';

const openingSocket = async () => {
  let socketController;
  const webSocket = new WebSocket('ws://localhost:9090');
  webSocket.onopen = () => {
    socketController = new SocketController(webSocket);
    mainStore.getState().setSocketControl(socketController);
    socketController.executeStep1();
  };
  webSocket.onmessage = (msg) => {
    socketController.handleServerMsg(msg);
  };
  return true;
};

export default openingSocket;
