const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DH Games' });
});

/* GET seguranca-garantida page. */
router.get('/seguranca-garantida', function(req, res, next) {
  res.render('seguranca-garantida', { title: 'DH Games: Segurança garantida' });
});

/* login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'DH Games: Faça seu login' });
});

router.post('/login', function(req, res, next) {
  console.log(req.body)
  res.render('login')
})

/* GET cadastro page. */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'DH Games: Cadastre-se' });
});

/* GET suporte page. */
router.get('/suporte', function(req, res, next) {
  res.render('suporte', { title: 'DH Games: Suporte ao cliente' });
});


module.exports = router;
