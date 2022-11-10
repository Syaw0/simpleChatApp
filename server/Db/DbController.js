/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
const { writeFileSync } = require('fs');
const Db = require('./db.json');
const NewUser = require('./util/createUser');

class DbController {
  findUser(id) {
    if (Db.users[id]) {
      return { status: true, data: Db.users[id], msg: 'find that id' };
    }
    return { status: false, data: Db.users[id], msg: 'not found that id' };
  }

  updateDb(newDb) {
    writeFileSync(`${__dirname}/db.json`, JSON.stringify(newDb));
  }

  createUser(id, password) {
    const scheme = new NewUser(id, password);
    Db.users[id] = scheme;
    this.updateDb(Db);
    return { status: true, msg: 'user created successfully' };
  }

  addMsgToDb(msg, target, sender) {
    Db.users[target].chats.find((chat) => {
      if (chat.targetId.id === sender) {
        msg.index = chat.chatList.length + 1;
        return chat;
      }
    }).chatList.push(msg);

    Db.users[sender].chats.find((chat) => {
      if (chat.targetId.id === target) {
        msg.index = chat.chatList.length + 1;
        return chat;
      }
    }).chatList.push(msg);
    this.updateDb(Db);
  }
}

module.exports = DbController;
