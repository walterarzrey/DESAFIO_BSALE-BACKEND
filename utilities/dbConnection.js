const Sequelize = require('sequelize');

const db = new Sequelize('bsale_test', 'bsale_test', 'bsale_test',{
    dialect:'mysql',
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com'
});

module.exports = db;