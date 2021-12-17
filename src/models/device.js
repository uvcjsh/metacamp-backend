const Sequelize = require('sequelize')

module.exports = class Device extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(100)
      },
      model: {
        type: Sequelize.STRING(100)
      },
      manufacturer: {
        type: Sequelize.STRING(100)
      },
      location: {
        type: Sequelize.STRING(100)
      },
      edge_id: {
        type: Sequelize.STRING(100)
      },
      profile_id: {
        type: Sequelize.STRING(100)
      },
      network_interface: {
        type: Sequelize.STRING(100)
      },
      network_config: {
        type: Sequelize.STRING(100)
      },
      description: {
        type: Sequelize.STRING(100)
      },
      user_id: {
        type: Sequelize.STRING(100)
      },
      group_id: {
        type: Sequelize.STRING(100)
      },
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