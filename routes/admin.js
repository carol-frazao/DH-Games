const express = require('express')
const router = express.Router()
const {Ofertas} = require('../models')
const adminController = require('../controllers/adminController')
const multer = require('multer')
const admin = require('../controllers/adminController')

const upload = multer({
  dest: 'public/uploads/'
})

function verificaLoginAdmin(req, res, next) {
  if(!req.session.estaLogado) {
    res.redirect('/login')
    return
  }
  next()
}

router.use(verificaLoginAdmin)

router.get('/', async function (req, res, next) {
  console.log(admin)

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


router.get('/editarOferta/:id', adminController.getEditarOferta)

router.post('/editarOferta/:id', adminController.postEditarOferta)


module.exports = router 