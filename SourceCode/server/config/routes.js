module.exports = function(server) {
  server.get('/play', function(req, res) {
    res.render('partials/play');
  });

  server.get('/requirements', function(req, res) {
    res.render('partials/requirements');
  });

  server.get('/documentation', function(req, res) {
    res.render('partials/documentation');
  });

  server.get('*', function(req, res) {
    res.render('index');
  });
};