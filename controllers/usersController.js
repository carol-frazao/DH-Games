const { Usuario } = require('../models')
const { validationResult } = require('express-validator')
const app = require('../app')

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
            console.log("Controller registraUsuario: ", req.body)

            const usuario = await Usuario.findOne( {
                where: {
                    email: req.body.email
                }
            })

            if(!usuario) {
                try {
                    Usuario.create({
                        nome: req.body.nome,
                        email: req.body.email,
                        senha: req.body.senha,
                        confirmaSenha: req.body.confirmaSenha
                    })
                    res.redirect('/cadastro/sucessoCadastro')
                } catch (error) {
                    console.log("-------------------------------");
                    console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Sempre use isso para saber o erro do sequelize
                    console.log("-------------------------------");
                }
    
            } else {
                res.redirect('/cadastro/usuarioCadastrado')
            }         
        }
    }

    
module.exports = users