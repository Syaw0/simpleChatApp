const express = require('express');
const path = require('path');
const bp = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

app.use(bp.json({ limit: '500mg' }));
app.use(bp.urlencoded({ extended: true, limit: '500mg', parameterLimit: '5000000' }));

app.use(cors({
  origin: '*',
  optionsSuccessStatus: '204',
  allowedHeaders: '*',
  methods: ['POST', 'GET', 'PUT', 'OPTIONS', 'DELETE'],
  preflightContinue: false,
}));

app.use(express.static('public'));
app.use(fileUpload());

app.get('/', (req, res) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
  });
  res.sendFile(path.join(`${__dirname}/public/index.html`));
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
