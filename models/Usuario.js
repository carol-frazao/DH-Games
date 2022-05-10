module.exports = (connection, DataTypes) => {

    const modelUsuarios = connection.define('Usuario', {
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
      timestamps: true,
      tableName: 'Usuarios'
    })
  
    // model.associate = models => {
  
    //   model.belongsToMany(models.Produto, {
    //     through: models.ProdutoFavoritoUsuario,
    //     foreignKey: 'usuario_id',
    //     as: 'favoritos'
    //   })
  
    //   model.sync({ alter: true })
    // }
  
    return modelUsuarios
  }
  