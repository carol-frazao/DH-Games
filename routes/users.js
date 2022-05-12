const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const usersValidator = require('../middlewares/usersValidator')
const { Usuario } = require('../models')

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
router.post('/registraUsuario', usersValidator.validateRegister, usersController.registraUsuario );


// router.post('/registraUsuario', usersController.validaCampos)

router.post('/cadastro', usersController.usuarioJaExiste) 


// router.post('/login', async function(req, res, next) {
//     try {
//       const usuarioLogin = await Usuario.findOne({
//         where: {
//           email: req.body.email
//         }
//       })
//       if(usuarioLogin && usuarioLogin.senha == req.body.senha) {
//         req.session.estaLogado = true
//         req.session.usuarioLogado = usuarioLogin
//         res.redirect('/suporte')
//       } else {
//         res.send('usuario nao existe')
//       }
//     } catch (erro) {
//       next(erro)
//     }
//   })


module.exports = router;