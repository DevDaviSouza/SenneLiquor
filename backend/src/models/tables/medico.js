import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class medico extends Model {
  static init(sequelize, Datatypes) {
    super.init({
      cd_medico: {
        autoIncrement: true,
        type: Datatypes.INTEGER(),
        allowNull: false,
        primaryKey: true
      },
      nm_medico: {
        type: Datatypes.STRING(100),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'medico',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "cd_medico" },
          ]
        },
      ]
    });

    return this;
  }
}