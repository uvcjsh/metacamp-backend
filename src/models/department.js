const Sequelize = require('sequelize')

module.exports = class Department extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(50)
      },
      code: {
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.TEXT
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Departments',
      tableName: 'departsments',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci'
    })
  }
  static associate(db) {
    db.Department.hasMany(db.User, { foreignKey: 'departmentId', sourceKey: 'id'})
  }
}