const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'production';
const config = require(__dirname + '/../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const User = require('./user')(sequelize, Sequelize);

module.exports = {
  sequelize,
  Sequelize,
  User,
}
