import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class hospital extends Model {
  static init(sequelize, Datatypes) {
    super.init({
      cd_hospital: {
        autoIncrement: true,
        type: Datatypes.INTEGER(),
        allowNull: false,
        primaryKey: true
      },
      nm_hospital: {
        type: Datatypes.STRING(100),
        allowNull: false
      },
      nr_latitude: {
        type: Datatypes.FLOAT,
        allowNull: false
      },
      nr_longitude: {
        type: Datatypes.FLOAT,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'hospital',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "cd_hospital" },
          ]
        },
      ]
    });

    return this;
  }
}