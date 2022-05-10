const modelUsuarios = require('../models/Usuario')


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
            modelUsuarios.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                confirmaSenha: req.body.confirmaSenha
            }).then(function() {
                res.send("Cadastro realizado com sucesso!")
            }).catch(function(erro) {
                res.send("Não foi possível realizar o cadastro: " + erro)
            })
        }
    }
    
module.exports = users