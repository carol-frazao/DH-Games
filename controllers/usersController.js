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
                // res.redirect('/login')
                // setTimeout(function() {
                    res.redirect('/login')
                // }, 3000)
            } catch (error) {
                console.log("-------------------------------");
                console.log(">>>> ERRO: ", JSON.stringify(error?.parent?.sqlMessage)); //Sempre use isso para saber o erro do sequelize
                console.log("-------------------------------");
            }
            
        },

        // validationRegister: (req, res) => {
        //     if(document.formRegister.nome.value=="" ||
        //     document.formRegister.nome.value.length < 3)
        //     {
        //     alert( "O nome precisa ter no mínimo 3 caracteres" );
        //     document.formRegister.nome.focus();
        //     return false;
        //     }
    
    
        //     if( document.formRegister.email.value=="" ||
        //     document.formRegister.email.value.indexOf('@')==-1 ||
        //     document.formRegister.email.value.indexOf('.')==-1 )
        //     {
        //     alert( "Insira um e-mail válido" );
        //     document.formRegister.email.focus();
        //     return false;
        //     }
    
        //     if (document.formRegister.senha.value=="")
        //     {
        //     alert( "Crie uma senha" );
        //     document.formRegister.senha.focus();
        //     return false;
        //     }
    
        //     if (document.formRegister.senha.value.length < 4 & document.formRegister.senha.value.length > 8)
        //     {
        //     alert("A senha deve ter entre 4 e 8 caracteres");
        //     document.formRegister.senha.focus();
        //     return false;
        //     }
    
        //     if (document.formRegister.confirmaSenha.value == "") {
        //         alert("Confirme sua senha");
        //         document.formRegister.confirmaSenha.focus();
        //         return false
        //     }
    
        //     if (document.formRegister.confirmaSenha.value != document.formRegister.senha.value) {
        //         alert("As senhas não conferem")
        //         document.formRegister.confirmaSenha.focus();
        //         return false
        //     }
    
        //     return true;
        // }
           
    }

    
module.exports = users