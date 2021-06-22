'use strict';

const express = require('express');

// Constants
const PORT = process.env.port || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);

console.log('listening!');