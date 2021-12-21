const Sequelize = require('sequelize')

module.exports = class Device extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      deviceModelName: {
        type: Sequelize.STRING(100)
      },
      manufacturer: {
        type: Sequelize.STRING(100)
      },
      location: {
        type: Sequelize.STRING(100)
      },
      edgeSerialNumber: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      networkInterface: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      networkConfig: {
        type: Sequelize.JSON,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(100)
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Device',
      tableName: 'devices',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    })
  }
  static associate(db) {
  }
}