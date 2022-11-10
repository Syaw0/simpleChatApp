class NewUser {
  constructor(id, password) {
    this.id = id;
    this.password = password;
    this.name = id;
    this.avatarImg = '';
    this.bio = '';
    this.chats = [];
    this.contacts = [];
  }
}

module.exports = NewUser;
