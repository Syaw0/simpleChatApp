const express = require('express');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const { Server } = require('ws');
const SocketController = require('./util/socket/socketController');
const AuthController = require('./util/auth/authController');
const DbController = require('./Db/DbController');

const wServer = new Server({ port: '9090' });
const dbController = new DbController();
const authController = new AuthController(dbController);
let socketController;

wServer.on('connection', (ws) => {
  socketController = new SocketController(ws, dbController);
  socketController.createNodeMap();

  ws.on('close', () => {
    console.log('closing');
  });

  ws.on('message', (msg) => {
    const data = msg.toString();
    socketController.handleClientMsg(data);
  });

  setInterval(() => {
    socketController.startInterval();
  }, 2000);
});

wServer.on('close', () => {
  console.log('closing wserver');
});
const app = express();
app.use(cookieParser());

app.use(bp.json({ limit: '500mg' }));
app.use(bp.urlencoded({ extended: true, limit: '500mg', parameterLimit: '5000000' }));

app.use(cors({
  origin: '*',
  optionsSuccessStatus: '204',
  allowedHeaders: '*',
  methods: ['POST', 'GET', 'PUT', 'OPTIONS', 'DELETE'],
  preflightContinue: false,
  credentials: true,
}));

app.use(express.static('public'));
app.use(fileUpload());

app.get('/', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.sendFile(path.join(`${__dirname}/public/index.html`));
});

app.get('/checkSession', (req, res) => {
  const cookie = req.cookies;
  if (cookie.hash && cookie.username) {
    res.send({ status: true, msg: 'session found' });
  } else {
    res.send({ status: false, msg: 'no session found in browser cookie' });
  }
});

app.post('/signup', async (req, res) => {
  const result = await authController.signup(req.body);
  if (result.status) {
    const hash = authController.createSessionKey(req.body);
    res.set(
      'Set-Cookie',
      [`hash=${hash}; Secure ; SameSite=strict `, `username=${req.body.username} ; Secure ; SameSite=strict `],
    );
    res.set('Access-Control-Allow-Credential', true);
  }
  res.send({ status: result.status, msg: result.msg });
});

app.post('/login', async (req, res) => {
  const result = await authController.login(req.body);
  if (result.status) {
    const hash = authController.createSessionKey(req.body);
    res.set(
      'Set-Cookie',
      [`hash=${hash}; Secure ; SameSite=strict `, `username=${req.body.username} ; Secure ; SameSite=strict `],
    );
    res.set('Access-Control-Allow-Credential', true);
  }

  res.send({ status: result.status, msg: result.msg });

  // res.send({ status: false });
});

app.get('*', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.send('404 Error');
});

app.listen(8080, () => {
});

module.exports = app;
