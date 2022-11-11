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

  async changeAvatarImg(file, id) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', id);
    const sendImgToServer = await fetch('http://localhost:8080/img', {
      method: 'POST',
      body: formData,
    });
    const res = await sendImgToServer.json();
    if (res.status) {
      console.log('successfully changed image');
    }
  }

  async addContact(username, id) {
    const data = { title: 'addContact', data: { id, username } };
    this.socket.send(JSON.stringify(data));
  }

  checkAddContact({ data }) {
    mainStore.getState().setResponseForAddContact(data);
  }

  deleteContact(me, id) {
    const data = { title: 'deleteContact', data: { me, id } };
    this.socket.send(JSON.stringify(data));
  }

  deleteChat(me, id) {
    const data = { title: 'deleteChat', data: { me, id } };
    this.socket.send(JSON.stringify(data));
  }

  deleteAvatarImg(id) {
    const data = {
      title: 'deleteAvatar',
      data: { id },
    };
    this.socket.send(JSON.stringify(data));
  }

  changeProfileName(id, value) {
    const data = {
      title: 'changeName',
      data: { id, value },
    };
    this.socket.send(JSON.stringify(data));
  }

  changeProfileBio(id, value) {
    const data = {
      title: 'changeBio',
      data: { id, value },
    };
    this.socket.send(JSON.stringify(data));
  }

  sendMsg(msg, targetId, whoami) {
    const data = { title: 'sendMsg', data: { msg, targetId, whoami } };
    this.socket.send(JSON.stringify(data));
  }

  createChatContainer(me, target) {
    const data = { title: 'createChatContainer', data: { me, target } };
    this.socket.send(JSON.stringify(data));
  }

  createNodeMap() {
    this.nodeMap = {
      Step1Response: this.checkStep1Response.bind(this),
      updateDb: this.updateDb.bind(this),
      checkAddContact: this.checkAddContact.bind(this),

    };
  }
}

export default SocketController;
