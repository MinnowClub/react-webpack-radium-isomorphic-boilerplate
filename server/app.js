require("babel/register")({
  optional: ["es7.decorators"]
});

var express = require('express');
var path = require('path');
var react = require('./react-loader');
var bodyParser = require('body-parser');

var app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 8964;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('cookie-parser')());
app.use(express.static(path.join(__dirname, '../views/')));

app.get('/', function(req, res){
  res.send(react('index.jsx', {name: 'John'}));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404);
  console.error(404, req.url);

  if (req.accepts('html')) {
    res.sendFile(path.resolve('views/404.html'));
    return;
  }

  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  res.type('txt').send('Not found');
});

// error handlers
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);

  if (process.env.NODE_ENV === 'development') {
    res.json(err);
  } else {
    res.render('error', { message: err.message });
  }
});

app.listen(process.env.PORT, function(){
  console.log('now listening on port', process.env.PORT);
});
