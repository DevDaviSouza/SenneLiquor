import _sequelize from 'sequelize';
const DataTypes = _sequelize.DataTypes;

import _hospital from './tables/hospital.js';
import _medico from './tables/medico.js';
import _chamado from './tables/chamado.js';
import _login from './tables/login.js';

export default function initModels(sequelize) {
  const hospital = _hospital.init(sequelize, DataTypes);
  const doctor = _medico.init(sequelize, DataTypes);
  const ticket = _chamado.init(sequelize, DataTypes);
  const login = _login.init(sequelize, DataTypes);

  ticket.belongsTo(hospital, { as: "hospital", foreignKey: "cd_hospital" });
  hospital.hasMany(ticket, { as: "chamados", foreignKey: "cd_hospital" });

  ticket.belongsTo(doctor, { as: "medico", foreignKey: "cd_medico" });
  doctor.hasMany(ticket, { as: "chamados", foreignKey: "cd_medico" });


  return {
    hospital,
    doctor,
    ticket,
    login,
  };
}