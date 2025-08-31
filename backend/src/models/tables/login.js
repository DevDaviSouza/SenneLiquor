import _sequelize from 'sequelize';
const {Model} = _sequelize;

export default class login extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      cd_login: {
        autoIncrement: true,
        type: DataTypes.INTEGER(), 
        allowNull: false,
        primaryKey: true
      },

      nm_login: {
        type: DataTypes.STRING(100), 
        allowNull: false
      },
      ds_senha: {
        type: DataTypes.STRING(100), 
        allowNull: false  
      }
    }, {
      sequelize,
      tableName: 'login',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "cd_login" },
          ]
        },
      ]
    });

    return this;
  }
}