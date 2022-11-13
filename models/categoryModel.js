// Import ORM sequelize
const Sequelize = require('sequelize');

// Importar conexión a la base de datos
const db = require('../utilities/dbConnection');

// Crear modelo categoría definiendo los campos que contendrá y tipos de datos
const Category = db.define('category', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{ tableName: 'category',timestamps: false});

// Exportar modelo
module.exports = Category;