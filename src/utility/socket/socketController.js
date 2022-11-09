import mainStore from '../../store/mainStore';

class SocketController {
  constructor(socket, store) {
    this.socket = socket;
    this.nodeMap = {};
    console.log(this.nodeMap);
  }

  handleServerMsg(msg) {
    const { title, data } = JSON.parse(msg.data);
    this.nodeMap[title](data);
  }

  executeStep1() {
    this.createNodeMap();
    const data = { title: 'step1', data: document.cookie };
    this.socket.send(JSON.stringify(data));
  }

  checkStep1Response(data) {
    if (data.status) {
      mainStore.getState().setDb(data.db);
      mainStore.getState().setIsDataLoaded(true);
    } else {
      mainStore.getState().setLoginStatus(false);
    }
  }

  updateDb() {
    console.log('updatedDb');
  }

  createNodeMap() {
    this.nodeMap = {
      Step1Response: this.checkStep1Response,
      updateDb: this.updateDb,
    };
  }
}

export default SocketController;
