const Sequelize = require('sequelize');

const db = require('../utilities/dbConnection');

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
    
module.exports = Category;