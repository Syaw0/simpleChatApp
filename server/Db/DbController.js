/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
const { writeFileSync, rmSync } = require('fs');
const Db = require('./db.json');
const createChatCon = require('./util/createChatCon');
const NewUser = require('./util/createUser');

class DbController {
  findUser(id) {
    if (Db.users[id]) {
      return { status: true, data: Db.users[id], msg: 'find that id' };
    }
    return { status: false, msg: 'not found that id' };
  }

  updateDb(newDb) {
    writeFileSync(`${__dirname}/db.json`, JSON.stringify(newDb, null, 4));
  }

  createUser(id, password) {
    const scheme = new NewUser(id, password);
    Db.users[id] = scheme;
    this.updateDb(Db);
    return { status: true, msg: 'user created successfully' };
  }

  updateAvatarImg(path, id) {
    Db.users[id].avatarImg = path;
    this.updateDb(Db);
  }

  checkAndAddContact({ id, username }) {
    const findUser = this.findUser(username);
    const me = this.findUser(id);
    if (!findUser.status) {
      return { status: 'reject', msg: `this ${username} is not exist on Db` };
    }
    const filteredList = me.data.contacts.find((cts) => cts === username);
    if (filteredList) {
      return { status: 'reject', msg: `this ${username} is your Contact!!` };
    }
    this.addContact(username, id);
    return { status: 'success', msg: `this ${username} now add to your contacts` };
  }

  addContact(id, target) {
    Db.users[target].contacts.push(id);
    this.updateDb(Db);
  }

  deleteContact({ me, id }) {
    const newContacts = Db.users[me].contacts.filter((cts) => cts !== id);
    Db.users[me].contacts = [...newContacts];
    this.updateDb(Db);
  }

  deleteChat({ me, id }) {
    const newChatList = Db.users[me].chats.filter((chat) => chat.targetId.id !== id);
    Db.users[me].chats = [...newChatList];
    this.updateDb(Db);
  }

  deleteAvatar(id) {
    Db.users[id].avatarImg = 'http://localhost:8080/imgdefault';
    rmSync(`${__dirname}/uploads/${id}.jpg`, { force: true });
    this.updateDb(Db);
  }

  createChatContainer({ me, target }) {
    const data = createChatCon(target);
    Db.users[me].chats.push(data);
    const targetChats = Db.users[target].chats.find((chat) => chat.targetId.id === me);
    if (!targetChats) {
      const targetData = createChatCon(me);
      Db.users[target].chats.push(targetData);
    }
  }

  changeName({ id, value }) {
    Db.users[id].name = value;
    this.updateDb(Db);
    return { status: 'success', msg: 'successfully update profile' };
  }

  changeBio({ id, value }) {
    Db.users[id].bio = value;
    this.updateDb(Db);
    return { status: 'success', msg: 'successfully update profile' };
  }

  addMsgToDb(msg, target, sender) {
    const checkTargetDb = Db.users[target].chats.find((chat) => chat.targetId.id === sender);

    if (!checkTargetDb) {
      const chatCon = createChatCon(sender);
      Db.users[target].chats.push(chatCon)
    }

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
