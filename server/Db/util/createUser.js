class NewUser {
  constructor(id, password) {
    this.id = id;
    this.password = password;
    this.name = id;
    this.avatarImg = 'http://localhost:8080/imgdefault';
    this.bio = '';
    this.chats = [];
    this.contacts = [];
  }
}

module.exports = NewUser;
