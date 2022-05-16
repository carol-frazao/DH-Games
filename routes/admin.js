const express = require('express')
const router = express.Router()
const {Ofertas} = require('../models')
const adminController = require('../controllers/adminController')
const multer = require('multer')

const upload = multer({
  dest: 'public/uploads/'
})

router.get('/', adminController.validaLogin, async function (req, res, next) {
  // console.log("usuario logado", await )

  const obj = {
    produtos: await Ofertas.findAll()
  }
  res.render('./admin/painelAdmin', { title: 'Painel do admin', obj});
  // console.log("produtos admin", obj.produtos)
})

router.post('/envioOfertas',  upload.single('imagemProduto'), adminController.envioOfertas)

router.get('/envioOfertas', function(req, res, next) {
  res.send('Oferta enviada ok')
})

router.get('/removeOferta/:id', adminController.removeOferta)


// router.get('/admin', function (req, res) {
//   res.render('./admin/painelAdmin', { listaOfertas: listaOfertas, title: 'Painel do admin'})
// })

module.exports = router 