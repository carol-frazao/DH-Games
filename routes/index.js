const express = require('express');
const { envioOfertas } = require('../controllers/adminController');
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
  

// router.get('/erro', function(req, res, next) {
//   res.render('paginaDeErro', {title: 'Erro'})
// })


//lista de produtos
const listaProdutos = [
  { 
    id: '1',
    imagemProduto:'https://live.staticflickr.com/65535/51857207563_5eea10a393_c.jpg',
    nomeProduto: 'APEX LEGENDS',
    valorOriginal: 79.99,
    valorPromocional: 39.99,
  },
  { 
    id: '2',
    imagemProduto:'https://live.staticflickr.com/65535/51857779895_0994fdb48c_b.jpg',
    nomeProduto: 'DISSIDIA FINAL',
    valorOriginal: 69.99,
    valorPromocional: 48.99,
  },
  { 
    id: '3',
    imagemProduto:'https://live.staticflickr.com/65535/51856166042_76fcd5c0dc_w.jpg',
    nomeProduto: 'THE YAKUZA',
    valorOriginal: 219.99,
    valorPromocional: 87.99,
  },
  { 
    id: '4',
    imagemProduto:'https://live.staticflickr.com/65535/51857122981_93e6f30cdf_z.jpg',
    nomeProduto: 'BATMAN ARKHAM',
    valorOriginal: 89.99,
    valorPromocional: 58.49,
  },
  { 
    id: '5',
    imagemProduto:'https://live.staticflickr.com/65535/51857779960_7d49728ba0_c.jpg',
    nomeProduto: 'BATTLEFIELD 2042',
    valorOriginal: 199.99,
    valorPromocional: 119.99,
  },
  { 
    id: '6',
    imagemProduto:'https://live.staticflickr.com/65535/51857122921_58bfd88ec7_c.jpg',
    nomeProduto: 'DARK SOULS III',
    valorOriginal: 79.99,
    valorPromocional: 43.99,
  },
  { 
    id: '7',
    imagemProduto:'https://live.staticflickr.com/65535/51857207528_fce20b3684_b.jpg',
    nomeProduto: 'ASSASSINS CREED',
    valorOriginal: 89.99,
    valorPromocional: 62.99,
  },
  { 
    id: '8',
    imagemProduto:'https://live.staticflickr.com/65535/51857207418_b10aac209b_b.jpg',
    nomeProduto: 'SONIC COLORS',
    valorOriginal: 199.99,
    valorPromocional: 99.99,
  },
  { 
    id: '9',
    imagemProduto:'https://live.staticflickr.com/65535/51856166127_0d148f4cc9_c.jpg',
    nomeProduto: 'DEMON SLAYER',
    valorOriginal: 269.99,
    valorPromocional: 134.99,
  },
]




// router.get('/:idProduto', function (req, res) {
//   const { idProduto } = req.params

//   const produto = listaProdutos.find(function (produto) {
//     return produto.id == idProduto
//   })

// })
// fim da lista de produtos


module.exports = router;
