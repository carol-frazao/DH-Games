const express = require('express')
const router = express.Router()
const {Ofertas} = require('../models')
const adminController = require('../controllers/adminController')
const multer = require('multer')

const upload = multer({
  dest: 'public/uploads/'
})

router.get('/', adminController.validaLogin)

router.post('/envioOfertas', adminController.envioOfertas)

router.get('/envioOfertas', function(req, res, next) {
  res.send('Oferta enviada ok')
})  


// router.get('/admin', function (req, res) {
//   res.render('./admin/painelAdmin', { listaOfertas: listaOfertas, title: 'Painel do admin'})
// })

module.exports = router 