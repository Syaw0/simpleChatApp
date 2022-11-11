class Message {
  constructor(value, targetId, sender) {
    this.value = value;
    this.reciver = targetId;
    this.transfer = sender;
    let customDate = new Date();
    customDate = `${customDate.getHours()}:${customDate.getMinutes()}`;
    this.date = customDate;
    this.index = null;
    this.seen = false;
    this.status = 1;
  }
}

module.exports = Message;
