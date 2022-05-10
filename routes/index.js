const express = require('express');
const router = express.Router();
// const {servicos} = require('./promotion')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index')
  res.render('index', { title: 'DH Games', listaProdutos: listaProdutos });
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


//lista de produtos
const listaProdutos = [
  { 
    id: '1',
    titulo: 'APEX LEGENDS',
    precoAnterior: 'R$79,99',
    precoAtual: 'R$39,99',
    desconto: '50%',
    img:'https://live.staticflickr.com/65535/51857207563_5eea10a393_c.jpg'
  },
  { 
    id: '2',
    titulo: 'DISSIDIA FINAL',
    precoAnterior: 'R$69,99',
    precoAtual: 'R$49,99',
    desconto: '40%',
    img:'https://live.staticflickr.com/65535/51857779895_0994fdb48c_b.jpg'
  },
  { 
    id: '3',
    titulo: 'THE YAKUZA',
    precoAnterior: 'R$219,99',
    precoAtual: 'R$87,99',
    desconto: '60%',
    img:'https://live.staticflickr.com/65535/51856166042_76fcd5c0dc_w.jpg'
  },
  { 
    id: '4',
    titulo: 'BATMAN ARKHAM',
    precoAnterior: 'R$89,99',
    precoAtual: 'R$58,49',
    desconto: '35%',
    img:'https://live.staticflickr.com/65535/51857122981_93e6f30cdf_z.jpg'
  },
  { 
    id: '5',
    titulo: 'BATTLEFIELD 2042',
    precoAnterior: 'R$199,99',
    precoAtual: 'R$119,99',
    desconto: '40%',
    img:'https://live.staticflickr.com/65535/51857779960_7d49728ba0_c.jpg'
  },
  { 
    id: '6',
    titulo: 'DARK SOULS III',
    precoAnterior: 'R$79,99',
    precoAtual: 'R$43,99',
    desconto: '45%',
    img:'https://live.staticflickr.com/65535/51857122921_58bfd88ec7_c.jpg'
  },
  { 
    id: '7',
    titulo: 'ASSASSINS CREED',
    precoAnterior: 'R$89,99',
    precoAtual: 'R$62,99',
    desconto: '30%',
    img:'https://live.staticflickr.com/65535/51857207528_fce20b3684_b.jpg'
  },
  { 
    id: '8',
    titulo: 'SONIC COLORS',
    precoAnterior: 'R$199,99',
    precoAtual: 'R$99,99',
    desconto: '50%',
    img:'https://live.staticflickr.com/65535/51857207418_b10aac209b_b.jpg'
  },
  { 
    id: '9',
    titulo: 'DEMON SLAYER',
    precoAnterior: 'R$269,99',
    precoAtual: 'R$134,99',
    desconto: '50%',
    img:'https://live.staticflickr.com/65535/51856166127_0d148f4cc9_c.jpg'
  },
]

router.get('/', function (req, res) {
  res.render('index', { listaProdutos: listaProdutos, title: 'DH Games'})
  console.log("Rota Promoções")
})

router.get('/:idProduto', function (req, res) {
  const { idProduto } = req.params

  const produto = listaProdutos.find(function (produto) {
    return produto.id == idProduto
  })

  res.render('dados-produto', produto)

})
// fim da lista de produtos


module.exports = router;
