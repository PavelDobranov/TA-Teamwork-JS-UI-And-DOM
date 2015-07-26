var express = require('express');

var server = express(),
  env = process.env.NODE_ENV || 'development',
  config = require('./server/config/config')[env];

require('./server/config/express')(server, config);
require('./server/config/routes')(server);

server.listen(config.port, function () {
  console.info('Server running on port: ' + config.port);
  console.info('Environment: ' + env);
});