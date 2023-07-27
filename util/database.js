const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopping_online', 'root', 'riteshrai', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
