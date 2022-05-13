var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser')

/*
Para encriptar um dado:
let hash = bcrypt.hashSync('minhaSenha!');

para verificar um dado:
bcrypt.compareSync("minhaSenha!", hash); // true
bcrypt.compareSync("outraSenha", hash); // false


middleware p adicionar dados de login
*/




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
	resave: false,
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
