const express = require('express')
const router = express.Router()

servicos = [
  { 
    id: '1',
    titulo: 'APEX LEGENDS',
    precoAnterior: 'R$ 79,99',
    precoAtual: 'R$ 39,99',
    desconto: '50%',
    img:'https://live.staticflickr.com/65535/51857207563_5eea10a393_c.jpg'
  },
  { 
    id: '2',
    titulo: 'DISSIDIA FINAL',
    precoAnterior: 'R$ 69,99',
    precoAtual: 'R$ 49,99',
    desconto: '40%',
    img:'https://live.staticflickr.com/65535/51857779895_0994fdb48c_b.jpg'
  },
  { 
    id: '3',
    titulo: 'THE YAKUZA',
    precoAnterior: 'R$ 219,99',
    precoAtual: 'R$ 87,99',
    desconto: '60%',
    img:'https://live.staticflickr.com/65535/51856166042_76fcd5c0dc_w.jpg'
  },
]

router.get('/', function (req, res) {
  res.render('index', { servicos: servicos})
  console.log("Rota Promoções")
})

router.get('/:idServico', function (req, res) {
  const { idServico } = req.params

  const servico = servicos.find(function (servico) {
    return servico.id == idServico
  })

  res.render('dados-servico', servico)

})

module.exports = router