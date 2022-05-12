const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const usersValidator = require('../middlewares/usersValidator')

/* GET login page. */
router.get('/login', usersController.login)

//valida usuario

/* GET cadastro page. */
router.get('/cadastro', usersController.cadastro);

/* GET termos de uso page. */
router.get('/cadastro/termosDeUso', usersController.termosDeUso);

/* GET termos de uso page. */
router.get('/cadastro/politicaPrivacidade', usersController.politicaPrivacidade);
  

//post formulario de cadastro, validação de registro
// router.post('/registraUsuario', usersValidator.validateRegister, usersController.registraUsuario );


// router.post('/registraUsuario', usersController.validaCampos)

module.exports = router;