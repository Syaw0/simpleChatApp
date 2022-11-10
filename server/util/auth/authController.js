/* eslint-disable class-methods-use-this */
const crypto = require('crypto');

class AuthController {
  constructor(dbController) {
    this.dbController = dbController;
  }

  login({ username, password }) {
    return new Promise((res) => {
      const data = this.dbController.findUser(username);
      if (data.status) {
        if (password === data.data.password) {
          res({ status: true, msg: 'successfully login' });
        }
        res({ status: false, msg: 'password not match' });
      }
      res({ status: false, msg: 'user not found' });
    });
  }

  signup({ username, password }) {
    return new Promise((res) => {
      const data = this.dbController.findUser(username);
      if (!data.status) {
        const creationResult = this.dbController.createUser(username, password);
        if (creationResult.status) {
          res({ status: true, msg: 'successfully signup' });
        } else {
          res({ status: false, msg: 'error during sign up' });
        }
      } else {
        res({ status: false, msg: 'username Exist' });
      }
    });
  }

  createSessionKey({ password }) {
    const hash = crypto.createHash('md5').update(password).digest('hex');
    return hash;
  }
}

module.exports = AuthController;
