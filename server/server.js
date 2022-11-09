const express = require('express');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const { Server } = require('ws');
const db = require('../src/utility/fakeDb');

const wServer = new Server({ port: '9090' });

wServer.on('connection', (ws, req) => {
  ws.on('message', (s) => {
    const scheme = { title: 'Step1Response', data: { status: true, db } };
    setTimeout(() => { ws.send(JSON.stringify(scheme)); }, 10);
  });
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
  res.send({ status: false });
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  res.send({ status: false, msg: 'error during signup' });
  // res.send({ status: false });
});

app.post('/login', (req, res) => {
  console.log('this is cookies', req.cookies);
  console.log(req.body);
  res.send({ status: true, msg: 'successfully login' });
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
