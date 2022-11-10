/* eslint-disable class-methods-use-this */
import mainStore from '../../store/mainStore';

class SocketController {
  constructor(socket) {
    this.socket = socket;
    this.nodeMap = {};
  }

  handleServerMsg(msg) {
    const { title } = JSON.parse(msg.data);
    this.nodeMap[title](JSON.parse(msg.data));
  }

  executeStep1() {
    this.createNodeMap();
    const loginUser = mainStore.getState().whoami;
    const data = { title: 'step1', data: loginUser };
    this.socket.send(JSON.stringify(data));
  }

  checkStep1Response(data) {
    if (data.status) {
      this.updateDb(data.data);
      mainStore.getState().setIsDataLoaded(true);
    } else {
      mainStore.getState().setLoginStatus(false);
    }
  }

  updateDb(newDb) {
    mainStore.getState().setDb(newDb);
  }

  sendMsg(msg, targetId, whoami) {
    const data = { title: 'sendMsg', data: { msg, targetId, whoami } };
    this.socket.send(JSON.stringify(data));
  }

  createNodeMap() {
    this.nodeMap = {
      Step1Response: this.checkStep1Response.bind(this),
      updateDb: this.updateDb.bind(this),

    };
  }
}

export default SocketController;
