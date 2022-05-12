module.exports = (connection, DataTypes) => {

    const modelAssinaturas = connection.define('Assinatura', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      emailAssinatura: {
        type: DataTypes.STRING(50)
      }
    }, {
      timestamps: false,
      tableName: 'assinaturas'
    })
    
    return modelAssinaturas
  }
  