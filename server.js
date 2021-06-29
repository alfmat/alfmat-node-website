'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/Alfred_Mathew_Resume', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/Alfred_Mathew_Resume.pdf'))
});

app.get('/bio', (req, res) => {
  res.send('Work in progress!')
});

app.listen(PORT, HOST);

console.log('listening!');