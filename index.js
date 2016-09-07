
'use strict';

var express = require('express')
  ,app = express()
  ,server = require('http').Server(app)

var PORT = process.env.PORT || 3000;

app.set('trust proxy', 'loopback, linklocal, uniquelocal');
app.use(express.static(__dirname+'/docs'));

server.listen(PORT);
console.log('SERVER RUNNING IN PORT', PORT);
