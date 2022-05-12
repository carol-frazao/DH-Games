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
                // setTimeout(function() {
                //     res.redirect('/login')
                // }, 3000)
            } catch (error) {
                console.log("-------------------------------");
                console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Sempre use isso para saber o erro do sequelize
                console.log("-------------------------------");
            }
            
        },

        usuarioJaExiste: async function (req, res, next) {

            const usuario = await Usuario.findOne({
                where: {
                  email: req.body.email
                }
              })
              
              if(usuario) {
                res.send('usuario ja existe')
                return
              }
              
            await Usuario.create(req.body)
        
            res.redirect('/login')
        
        }

        // validaCampos: (req, res, next) => {

        //     if(req.body.nome == "")
        //     {
        //         alert( "Preencha seu nome" );
        //         req.body.nome.focus();
        //         return false;
        //     }
    
    
        //     if(req.body.nome.length < 3)
        //     {
        //         alert( "O nome precisa ter no mínimo 3 caracteres" );
        //         req.body.nome.focus();
        //         return false;
        //     }
    
    
        //     if( req.body.email =="" ||
        //     req.body.email.indexOf('@')==-1 ||
        //     req.body.email.indexOf('.')==-1 )
        //     {
        //         alert( "Insira um e-mail válido" );
        //         req.body.email.focus();
        //         return false;
        //     }
    
        //     if (req.body.senha=="")
        //     {
        //         alert( "Crie uma senha" );
        //         req.body.senha.focus();
        //         return false;
        //     }
    
        //     if (req.body.senha.length < 4 || req.body.senha.length > 8)
        //     {
        //         alert("A senha deve ter entre 4 e 8 caracteres");
        //         req.body.senha.focus();
        //         return false;
        //     }
    
        //     if (req.body.confirmaSenha == "") {
        //         alert("Confirme sua senha");
        //         req.body.confirmaSenha.focus();
        //         return false
        //     }
    
        //     if (req.body.confirmaSenha != req.body.senha) {
        //         alert("As senhas não conferem")
        //         req.body.confirmaSenha.focus();
        //         return false
        //     }
    
        //     return true;
        // }
               
    }

    
module.exports = users