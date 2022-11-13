const Sequelize = require('sequelize');
/*
const db = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD,{
    dialect:'mysql',
    host: process.env.HOST
});*/

const db = new Sequelize('bsale_test', 'bsale_test', 'bsale_test',{
    dialect:'mysql',
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com'
});

module.exports = db;