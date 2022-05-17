const express = require('express');
const router = express.Router();
const {Usuario} = require('../models')
const {Ofertas} = require('../models')

/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log('index')
  const obj = {
    produtos: await Ofertas.findAll()
  }
  res.render('index', { title: 'DH Games', obj});
  //console.log(obj.produtos)
});

/* GET seguranca-garantida page. */
router.get('/seguranca-garantida', function(req, res, next) {
  res.render('seguranca-garantida', { title: 'DH Games: Segurança garantida' });
});


router.get('/login/erroLogin', function(req, res, next) {
  res.render('loginError', {title: 'Ops...'})
})

router.get('/login/dadosIncorretos', function(req, res, next) {
  res.render('dadosIncorretos', {title: 'Ops...'})
})

router.post('/login', async function validaLogin (req, res, next) {

  try {
    const usuarioLogin = await Usuario.findOne({
      where: {
        email: req.body.email
      }
    })

    if(usuarioLogin && usuarioLogin.senha == req.body.senha) {
      req.session.estaLogado = true
      req.session.usuarioLogado = usuarioLogin
      res.redirect('/')
      // next()
    } if(usuarioLogin && usuarioLogin.senha != req.body.senha) {
      res.redirect('/login/dadosIncorretos')
    } if(!usuarioLogin) {
      res.redirect('/login/erroLogin')
    }
  } catch (erro) {
    next(erro)
  }
})

//quando a sessão está iniciada na aplicação
router.get('/login/usuarioLogado', function(req, res, next) {
  res.render('usuarioLogado', {title: 'Usuário logado'})
})

/* login page. */
router.get('/login', function(req, res, next) {
  console.log('login')
  if(req.session.estaLogado) {
    res.redirect('/login/usuarioLogado')
  } else {
    res.render('login', { title: 'Entrar' });
  }
  });

//tentativa registro de usuário já cadastrado
router.get('/cadastro/usuarioCadastrado', function(req, res, next) {
  res.render('usuarioCadastrado', {title: 'Ops...'})
})

//sucesso no cadastro
router.get('/cadastro/sucessoCadastro', function(req, res, next) {
  res.render('sucessoCadastro', { title: 'Opa!'})
})

//encerrar sessão
router.get('/logout', function(req, res, next) {
  req.session.destroy()
  res.redirect('/')
})

/* GET cadastro page. */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Cadastrar' });
});

/* GET suporte page. */
router.get('/suporte', function(req, res, next) {
  res.render('suporte', { title: 'Suporte ao cliente' });
});

//view games
router.get('/produtos/freeFire', function(req, res, next) {
  res.render('./produtos/free-fire', {title: 'Free Fire', games})
})

router.get('/produtos/wildRift', function(req, res, next) {
  res.render('./produtos/wildRift', {title: 'Wild Rift', games})
})

router.get('/produtos/pubgMobile', function(req, res, next) {
  res.render('./produtos/pubgMobile', {title: 'pubgMobile', games})
})

const games = {

  freeFire: {
    img: 'https://ibb.co/7rJKHWn',
    tituloGame: 'Free Fire',
    descricaoGame: 'Free Fire é um jogo mobile de tiro no estilo Battle Royale, ou seja, todos contra todos. Disponível para Android e iOS (iPhone), Free Fire coloca até 50 jogadores numa ilha e    estes precisam encontrar, rapidamente, armas e equipamentos para tentar sobreviver e    eliminar outros jogadores. ',
    valorGame: '19,99',
  },

  wildRift: {
    img: 'https://ibb.co/7rJKHWn',
    tituloGame: 'Wild Rift',
    descricaoGame: 'Mergulhe no Wild Rift: a experiência de MOBA 5v5 cheia de habilidades e estratégias de League of Legends (e tudo feito do zero para dispositivos móveis e consoles!). Com controles novos e partidas aceleradas, jogadores de todos os níveis podem se unir aos amigos, escolher seus Campeões e fazer grandes jogadas. ',
    valorGame: '29,99',
  },

  pubgMobile: {
    img: 'https://ibb.co/7rJKHWn',
    tituloGame: 'Pubg Mobile',
    descricaoGame: 'PUBG Mobile é a versão para Android e iOS de PlayerUnknowns Battlegrounds, jogo de sobrevivência no estilo Battle Royale que faz sucesso no PC e Xbox One. Completamente adaptado para telas de toque, o game é gratuito para jogar e conta com as principais modalidades da versão principal, assim como ajustes gráficos e sistema de missões diárias.',
    valorGame: '49,99',

  }

}

  

module.exports = router;
