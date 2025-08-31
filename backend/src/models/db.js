import initModels from './init-models.js';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'postgres',
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST || 'localhost',
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
  logging: console.log,
})

const db = initModels(sequelize);

export default db;