const Sequelize = require('sequelize')

const sequelize = new Sequelize('dh-games', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}