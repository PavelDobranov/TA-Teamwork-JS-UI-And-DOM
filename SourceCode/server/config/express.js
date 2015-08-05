var express = require('express'),
  path = require('path');

module.exports = function(server, config) {
  server.set('view engine', 'jade');
  server.set('views', path.join(config.rootPath, 'server/views'));
  server.use(express.static(path.join(config.rootPath, 'public')));
};