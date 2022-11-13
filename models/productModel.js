// Import ORM sequelize
const Sequelize = require('sequelize');

// Importar conexión a la base de datos
const db = require('../utilities/dbConnection');

// Crear modelo producto definiendo los campos que contendrá y tipos de datos
const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url_image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    discount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    category: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{ tableName: 'product',timestamps: false});

// Exportar modelo
module.exports = Product;