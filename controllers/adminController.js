const { Ofertas } = require('../models')
const multer = require('multer')

const upload = multer({
  dest: 'public/uploads/'
})

const admin = {

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

    getEditarOferta: async function(req, res, next) {
      const idProduto = req.params.id
      const oferta = await Ofertas.findByPk(idProduto)
      const obj = {
        oferta: oferta,
        title: 'Editar oferta'
      }
    
      if(!oferta) {
        res.render('paginaDeErro', {title: 'Ops...'})
        return
      }
    
      res.render('./admin/editarOferta', obj)
     
      console.log(obj.oferta)
    
    },
    

    postEditarOferta: async function(req, res, next) {

      console.log(req.params)
      console.log('enviando atualizações')

      req?.file?.filename ? req.body.imagemProduto = req?.file?.filename : ""

      const idProduto = req.params.id

      await Ofertas.update(req.body, {
        where: {
          id: idProduto
        }
      })

      res.redirect('/admin')
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
  },

}


module.exports = admin