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

  handleReceivedMsg({ msg, targetId, whoami }) {
    const newMsg = new Message(msg, targetId, whoami);
    this.dbController.addMsgToDb(newMsg, targetId, whoami);
  }

  formatDbToSend(userDb) {
    return formatUserData(userDb, this.dbController);
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
    };
  }
}

module.exports = SocketController;
