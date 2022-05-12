const { Usuario } = require('../models')
const { validationResult } = require('express-validator')



const users =  {

        login: (req, res, next) => {
        res.render('login', {title: ' Entrar'}) },

        cadastro: (req, res, next) => {
            res.render('cadastro', {title: ' Cadastre-se'})
        },

        termosDeUso: (req, res, next) => {
            res.render('termosDeUso', {title: 'Termos de Uso'}) 
        },

        politicaPrivacidade: (req, res, next) => {
            res.render('politicaPrivacidade', {title: 'Política de Privacidade'}) 
        },



        registraUsuario: async function (req, res, next)  {
            // res.send(req.body.nome + req.body.email)
            console.log("Controller registraUsuario: ", req.body)

            const usuario = await Usuario.findAll( {
                where: {
                    email: req.body.email
                }
            })
            console.log(usuario[0].dataValues)

            if(!usuario[0].dataValues) {
                try {
                    Usuario.create({
                        nome: req.body.nome,
                        email: req.body.email,
                        senha: req.body.senha,
                        confirmaSenha: req.body.confirmaSenha
                    })
                    res.redirect('/login')
                    // setTimeout(function() {
                    //     res.redirect('/login')
                    // }, 3000)
                } catch (error) {
                    console.log("-------------------------------");
                    console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Sempre use isso para saber o erro do sequelize
                    console.log("-------------------------------");
                }
    
            } else {
                res.send('ja existe')
            }         
        }
               
    }

    
module.exports = users