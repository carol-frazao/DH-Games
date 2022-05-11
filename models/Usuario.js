module.exports = (connection, DataTypes) => {

    const model = connection.define('Usuario', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING(100)
      },
      email: {
        type: DataTypes.STRING(100)
      },
      senha: {
        type: DataTypes.STRING(20)
      },
      confirmaSenha: {
        type: DataTypes.STRING(20)
      }
    }, {
      timestamps: false,
      tableName: 'usuarios'
    })
  
    // model.associate = models => {
  
    //   model.belongsToMany(models.Produto, {
    //     through: models.ProdutoFavoritoUsuario,
    //     foreignKey: 'usuario_id',
    //     as: 'favoritos'
    //   })
  
    //   model.sync({ alter: true })
    // }
  
    return model
  }
  