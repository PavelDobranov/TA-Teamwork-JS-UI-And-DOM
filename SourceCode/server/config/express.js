var express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path');

module.exports = function(server, config) {
  server.set('view engine', 'jade');
  server.set('views', path.join(config.rootPath, 'server/views'));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json())
  server.use(express.static(path.join(config.rootPath, 'public')));
};