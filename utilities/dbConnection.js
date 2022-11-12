const Sequelize = require('sequelize');

const db = new Sequelize('bsale_test', process.env.MYSQL_USER, 'bsale_test',{
    dialect:'mysql',
    host: process.env.HOST
});

module.exports = db;