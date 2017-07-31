const express = require( 'express' );
const app = express();
const morgan = require('morgan');
const volleyball = require('volleyball');

app.listen(3000);

// app.use('/', function(req, res, next) {
//   console.log(req.method, req.originalUrl, res.statusCode);
//   next();
// })

morgan(function(tokens, req, res) {
  return [tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res)
         ].join(' ');
});

app.use('/special/', function(req, res, next) {
  console.log("you reached the special area.");
  next();
})

app.get('/', function(req, res) {
  res.send('server listening \n');
})
