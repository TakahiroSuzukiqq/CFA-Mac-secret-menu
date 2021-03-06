require('dotenv').config()

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var mongoose = require('mongoose');

var app = express();


//jsonwebtoken
const authApi = require('./middleware/authApi');

var jwt = require('jsonwebtoken');
var token = jwt.sign({ email: process.env.EMAIL }, 'secretcode');
console.log(token);

mongoose.connect(process.env.MONGOLAB_URI);
  const { connection: db } = mongoose;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('connected to mac secret menu')
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


function normalizePort1(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
var portTemp = normalizePort1(process.env.PORT || '3000');
console.log(`listen PORT is ${portTemp}`)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//jsonwebtoken
app.use('/api*', authApi);
app.use('/', index);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("In app js");

module.exports = app;
