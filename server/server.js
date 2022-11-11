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
const uploadImg = require('./Db/util/uploadImg');

const wServer = new Server({ port: '9090' });
const dbController = new DbController();
const authController = new AuthController(dbController);
let socketController;
let socketControllerList = []


wServer.on('connection', (ws) => {
  socketController = new SocketController(ws, dbController);
  socketControllerList.push(socketController)
  socketController.createNodeMap();

  ws.on('close', () => {
    socketControllerList = socketControllerList.filter((sc)=>sc.whoami !== socketController.whoami)
    console.log('closing');
  });

  ws.on('message', (msg) => {
    const data = msg.toString();
    socketController.handleClientMsg(data);
  });
  setInterval(() => {
    socketControllerList.forEach((s)=>{
      s.startInterval()
      console.log(s.whoami)

    });
    // socketController.startInterval();
    // wServer.clients.forEach(v=>{
    //   console.log('im here',x) 
    // })
  }, 2000);
});

// wServer.clients.forEach(v=>{console.log(v.on)})

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
    res.send({ status: true, msg: 'session found', username: cookie.username });
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
});

app.post('/img', async (req, res) => {
  const filePath = `${__dirname}/Db/uploads/${req.body.id}.jpg`;
  const result = await uploadImg(req.files.file, filePath);
  const urlPath = `http://localhost:8080/img${req.body.id}?${Math.random()}`;
  dbController.updateAvatarImg(urlPath, req.body.id);
  res.send({ status: result.status, msg: result.msg });
});

app.get('/img:id', async (req, res) => {
  res.sendFile(`${__dirname}/Db/uploads/${req.params.id}.jpg`);
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
