const { Usuario } = require('../models')




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

        registraUsuario: (req, res, next) => {
            // res.send(req.body.nome + req.body.email)
            console.log("Controller registraUsuario: ", req.body)

            try {
                Usuario.create({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha,
                    confirmaSenha: req.body.confirmaSenha
                })
                res.redirect('/login')
            } catch (error) {
                console.log("-------------------------------");
                console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Sempre use isso para saber o erro do sequelize
                console.log("-------------------------------");
            }
    
            
        }
    }
    
module.exports = users