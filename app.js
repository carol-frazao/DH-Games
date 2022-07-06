var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC_dIrAENISf1NWTtUCA0Qc27FEZP3D-yE",
  authDomain: "dh-games-e85e6.firebaseapp.com",
  projectId: "dh-games-e85e6",
  storageBucket: "dh-games-e85e6.appspot.com",
  messagingSenderId: "791205969922",
  appId: "1:791205969922:web:b66ea01cd01b6a63bba71b",
  measurementId: "G-6FCQB9GP4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//session
app.use(session({
	secret: 'dhgames123',
	resave: true,
	saveUninitialized: true, 
}));
app.use(function adicionaUserNoRender(req, res, next) {
  res.locals.usuarioLogado = req.session.usuarioLogado
  res.locals.estaLogado = req.session.estaLogado
  res.locals.nomeUsuario = req.session.nomeUsuario
  next()
})

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'))
app.use('/admin', require('./routes/admin'))

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
