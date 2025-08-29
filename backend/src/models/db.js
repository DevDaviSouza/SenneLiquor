import initModels from './init-models.js';
import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:10230aaaaa@localhost:5432/postgres', {
  logging: console.log,
})

const db = initModels(sequelize);

export default db;