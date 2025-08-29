import _sequelize from 'sequelize';
const {Model, Sequelize} = _sequelize;

export default class chamado extends Model {
  static init(sequelize, Datatypes) {
    super.init({
      nr_chamado: {
        autoIncrement: true,
        type: Datatypes.INTEGER(),
        allowNull: false,
        primaryKey: true
      },
      cd_hospital: {
        type: Datatypes.INTEGER(),
        allowNull: false,
        references: {
          model: 'hospital',
          key: 'cd_hospital'
        },
      },
      ie_tipo_chamado: {
        type: Datatypes.CHAR(1),
        allowNull: false
      },
      nm_paciente: {
        type: Datatypes.STRING(100),
        allowNull: false
      },
      ie_sexo: {
        type: Datatypes.CHAR(1)
      },
      ie_status_chamado: {
        type: Datatypes.CHAR(1),
        allowNull: false
      },
      cd_medico: {
        type: Datatypes.INTEGER(),
        allowNull: true,
        references: {
          model: 'medico',
          key: 'cd_medico'
        }
      }
    }, {
      sequelize,
      tableName: 'chamado',
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "nr_chamado" },
          ]
        },
        {
          name: "cd_hospital",
          using: "BTREE",
          fields: [
            { name: "cd_hospital" },  
          ]
        },
        {
          name: "cd_medico",
          using: "BTREE",
          fields: [
            { name: "cd_medico" },
          ]
        }
      ]
    });
    return this;
  }
}