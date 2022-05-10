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
        }
    }
    
module.exports = users