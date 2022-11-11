/* eslint-disable class-methods-use-this */
const Message = require('../../Db/util/createMsg');
const formatUserData = require('./formatUserData');

class SocketController {
  constructor(socket, dbController) {
    this.socket = socket;
    this.dbController = dbController;
    this.nodeMap = {};
    this.whoami = '';
  }

  handleClientMsg(msg) {
    const { title, data } = JSON.parse(msg);
    this.nodeMap[title](data);
  }

  step1Handle(data) {
    this.whoami = data;
    const userDb = this.dbController.findUser(data);
    if (userDb.status) {
      const formattedDb = this.formatDbToSend(userDb.data);
      const msg = {
        status: true, title: 'Step1Response', msg: userDb.msg, data: formattedDb,
      };
      this.socket.send(JSON.stringify(msg));
    } else {
      const msg = { status: false, title: 'Step1Response', msg: userDb.msg };
      this.socket.send(JSON.stringify(msg));
    }
  }

  deleteAvatar({ id }) {
    this.dbController.deleteAvatar(id);
  }

  addContact(data) {
    const result = this.dbController.checkAndAddContact(data);
    const responseData = { title: 'checkAddContact', data: result };
    this.socket.send(JSON.stringify(responseData));
  }

  handleReceivedMsg({ msg, targetId, whoami }) {
    const newMsg = new Message(msg, targetId, whoami);
    this.dbController.addMsgToDb(newMsg, targetId, whoami);
  }

  formatDbToSend(userDb) {
    return formatUserData(userDb, this.dbController);
  }

  changeName(data) {
    const result = this.dbController.changeName(data);
    const responseData = { title: 'checkAddContact', data: result };
    this.socket.send(JSON.stringify(responseData));
  }

  changeBio(data) {
    const result = this.dbController.changeBio(data);
    const responseData = { title: 'checkAddContact', data: result };
    this.socket.send(JSON.stringify(responseData));
  }

  deleteContact(data) {
    this.dbController.deleteContact(data);
  }

  deleteChat(data) {
    this.dbController.deleteChat(data);
  }

  createChatContainer(data) {
    this.dbController.createChatContainer(data);
  }

  startInterval() {
    const userDb = this.dbController.findUser(this.whoami);
    if (userDb.status) {
      const formattedDb = this.formatDbToSend(userDb.data);
      const msg = {
        status: true, title: 'Step1Response', msg: userDb.msg, data: formattedDb,
      };
      this.socket.send(JSON.stringify(msg));
    }
  }

  createNodeMap() {
    this.nodeMap = {
      step1: this.step1Handle.bind(this),
      sendMsg: this.handleReceivedMsg.bind(this),
      deleteAvatar: this.deleteAvatar.bind(this),
      addContact: this.addContact.bind(this),
      deleteContact: this.deleteContact.bind(this),
      deleteChat: this.deleteChat.bind(this),
      createChatContainer: this.createChatContainer.bind(this),
      changeBio: this.changeBio.bind(this),
      changeName: this.changeName.bind(this),
    };
  }
}

module.exports = SocketController;
