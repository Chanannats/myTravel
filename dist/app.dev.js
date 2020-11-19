"use strict";

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

var travelRouter = require('./routes/travel');

var historyRouter = require('./routes/history');

var locateRouter = require('./routes/locate');

var favPlacesRouter = require('./routes/favPlaces');

var kohHuYongRouter = require('./routes/kohHuYong');

var kohPaYoungRouter = require('./routes/kohPaYoung');

var kohPaYunRouter = require('./routes/kohPaYun');

var kohMeangRouter = require('./routes/kohMeang');

var kohPaYooRouter = require('./routes/kohPaYoo');

var kohHinRouter = require('./routes/kohHin');

var kohSimilanRouter = require('./routes/kohSimilan');

var kohBagooRouter = require('./routes/kohBagoo');

var kohHaRouter = require('./routes/kohHa');

var kohTachaiRouter = require('./routes/kohTachai');

var kohBonRouter = require('./routes/kohBon');

var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/history', historyRouter);
app.use('/locate', locateRouter);
app.use('/favPlaces', favPlacesRouter);
app.use('/kohHuYong', kohHuYongRouter);
app.use('/kohPaYoung', kohPaYoungRouter);
app.use('/kohPaYun', kohPaYunRouter);
app.use('/kohMeang', kohMeangRouter);
app.use('/kohPayoo', kohPaYooRouter);
app.use('/kohHin', kohHinRouter);
app.use('/kohSimilan', kohSimilanRouter);
app.use('/kohBagoo', kohBagooRouter);
app.use('/kohHa', kohHaRouter);
app.use('/kohTachai', kohTachaiRouter);
app.use('/kohBon', kohBonRouter); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;