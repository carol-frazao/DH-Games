const db = require('./db')

const Usuario = db.sequelize.define('Usuario', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    confirmaSenha: {
        type: db.Sequelize.STRING
    }
})

module.exports = Usuario