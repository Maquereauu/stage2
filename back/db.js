const dotenv = require('dotenv');
dotenv.config();
const { Sequelize } = require('sequelize');

let sequelizeInstance = null;

function createSequelizeInstance() {
  const sequelize = new Sequelize('basetest2', 'maquereau', process.env.PASSWORD, {
    host: process.env.LINK,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    pool: {
      max: 25,
      min: 0,
      acquire: 10000,
      idle: 1500
    }
  });

  return sequelize;
}

function getSequelizeInstance() {
  if (!sequelizeInstance) {
    sequelizeInstance = createSequelizeInstance();
  }
  return sequelizeInstance;
}

module.exports = getSequelizeInstance();