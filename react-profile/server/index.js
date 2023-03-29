import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { DiaryPage } from '../src/pages/DiaryPage';
import { Sample } from '../src/components/Sample'
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
const express = require('express');
const path = require('path');
const app = express();


// app.use(express.static(path.join(__dirname, 'public'), { 'Content-Type': 'text/javascript' }));
app.use(express.static(path.join(__dirname, "public")));


app.get('*', function (req, res) {
  const ap = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  // const ap = renderToString(<Sample />);
  // console.log(html)

  const html = `
        <html lang="en">
        <head>
        <script src="bundle.js" async defer></script>
        </head>
        <body>
            <div id="root">${ap}</div>
        </body>
        </html>
    `;

  res.send(html);
  // console.log("AAAA")
  // res.send('Hello World!');
});

// app.get('/bundle.js', function(req, res) {
//   res.sendFile(path.join(__dirname, 'dist', 'bundle.js'));
// });

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});