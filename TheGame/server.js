var express = require('express');

var app = express();

var port = 3030;

app.set('view engine', 'jade');
app.set('views', './server/views');
app.use(express.static('./'));
app.get('*', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('Server running on port: ' + port);
});
