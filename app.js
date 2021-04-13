var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
city= "Memphis"
var url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35f1b4967b15466c87502e7b3aef9681`
app.get('/', function(req, res){
  request(url, function(error, response, body){
    weather_json= JSON.parse(body)
    var weather ={
      city: city,
      tempurature: weather_json.main.temp,
      description: weather_json.weather[0].description
    }
    var weather_data={weather: weather}
    res.render('views/layout.jade', weather_data)
  })
})
