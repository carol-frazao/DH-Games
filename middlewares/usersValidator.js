    const {check} = require('express-validator')

    //validações aqui:
    const validateRegister = [
        check('nome')
            .notEmpty().withMessage('Preencha seu nome').bail()
            .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),

        check('email')
            .notEmpty().withMessage('Preencha seu e-mail').bail()
            .isEmail().withMessage('Insira um e-mail válido'),

        check('senha')
            .notEmpty().withMessage('Crie uma senha').bail()
            .isLength({ min: 4, max: 8}).withMessage('A senha deve ter entre 4 e 8 caracteres'),

        check('confirmaSenha')
            .notEmpty().withMessage('Confirme sua senha')
    ]

    //agrupamento das validações em um objeto
    const validacoes = {
        validateRegister
    }
        

    module.exports = validacoes

