const { Ofertas } = require('../models')
const multer = require('multer')

const upload = multer({
  dest: 'public/uploads/'
})

const admin = {

    validaLogin: function(req, res, next) {
    console.log('admin')
    console.log("req.session.estaLogado", req?.session?.estaLogado)
      if(req.session.estaLogado) {
        next()

      } else {
        // next()
        res.render('naoEstaLogado', {title: 'Sessão expirada'})
      }
    },

    envioOfertas: async function (req, res, next) {
      req.body.imagem = req.file.filename
      console.log("req.file", req.file)
        console.log("Controller envioOfertas: ", req.body)
  
        const oferta = await Ofertas.findOne({
          where: {
            nomeProduto: req.body.nomeProduto
          }
        })
    
        if(!oferta) {
          upload.single('imagemProduto')
          try {
            console.log("body oferta", req.body)
              Ofertas.create({
                  imagemProduto: req.body.imagem,
                  nomeProduto: req.body.nomeProduto,
                  valorOriginal: req.body.valorOriginal,
                  valorPromocional: req.body.valorPromocional
              })
              res.redirect('/admin')
          } catch (error) {
              console.log("-------------------------------");
              console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Sempre use isso para saber o erro do sequelize
              console.log("-------------------------------");
          }
    
      } else {
          res.send('Este produto já está entre as ofertas')
      } 

    },

  removeOferta: async function (req, res, next) {
    console.log(req.params)
      const idProduto = req.params.id
      await Ofertas.destroy({
        where: {
          id: idProduto
        }
      })
    res.redirect('/admin')
    }
}


//lista de produtos
const listaProdutos = [
  { 
    id: '1',
    imagemProduto:'https://live.staticflickr.com/65535/51857207563_5eea10a393_c.jpg',
    nomeProduto: 'APEX LEGENDS',
    valorOriginal: 79.99,
    valorPromocional: 39.99,
    desconto: Math.round(this.valorPromocional*100/this.valorOriginal)
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
    imgagemProduto:'https://live.staticflickr.com/65535/51857779960_7d49728ba0_c.jpg',
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
    imgagemProduto:'https://live.staticflickr.com/65535/51856166127_0d148f4cc9_c.jpg',
    nomeProduto: 'DEMON SLAYER',
    valorOriginal: 269.99,
    valorPromocional: 134.99,
  },
]

module.exports = admin