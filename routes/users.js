const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

/* GET login page. */
router.get('/login', usersController.login)

/* GET cadastro page. */
router.get('/cadastro', usersController.cadastro);

/* GET termos de uso page. */
router.get('/cadastro/termosDeUso', usersController.termosDeUso);

/* GET termos de uso page. */
router.get('/cadastro/politicaPrivacidade', usersController.politicaPrivacidade);

//post formulario de cadastro
router.post('/registraUsuario', usersController.registraUsuario);


module.exports = router;