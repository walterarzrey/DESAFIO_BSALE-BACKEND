const Sequelize = require('sequelize');

const db = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD,{
    dialect:'mysql',
    host: process.env.HOST
});

module.exports = db;