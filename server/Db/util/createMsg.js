class Message {
  constructor(value, targetId, sender) {
    this.value = value;
    this.reciver = targetId;
    this.transfer = sender;
    this.date = new Date();
    this.index = null;
    this.seen = false;
    this.status = 1;
  }
}

module.exports = Message;
