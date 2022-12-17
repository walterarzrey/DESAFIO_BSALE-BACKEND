// Importr ORM de sequelize
const Sequelize = require('sequelize');

// Iniciar conexión hacia la base de datos con variables de entorno ubicadas en el servidor del deploy
const db = new Sequelize('bsale_test', 'bsale_test', 'bsale_test',{
    dialect:'mysql',
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com'
});

// Exportar conexión
module.exports = db;