// Importr ORM de sequelize
const Sequelize = require('sequelize');

// Iniciar conexión hacia la base de datos con variables de entorno ubicadas en el servidor del deploy
const db = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD,{
    dialect:'mysql',
    host: process.env.HOST
});

// Exportar conexión
module.exports = db;