import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'dist'), { 'Content-Type': 'text/javascript' }));

app.get('/', function (req, res) {
  const html = renderToString(<App />);
  // console.log(html)
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">hello</div>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>
  `);
  // console.log("AAAA")
  // res.send('Hello World!');
});

// app.get('/bundle.js', function(req, res) {
//   res.sendFile(path.join(__dirname, 'dist', 'bundle.js'));
// });

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});