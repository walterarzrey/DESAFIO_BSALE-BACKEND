// Imports globales y predefinidos
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Import propios
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

const db = require('./utilities/dbConnection');

// Para acceder a la información del body habilitado para JSON
app.use(bodyParser.json());

// Rutas
app.use(productRoutes);
app.use(categoryRoutes);

// Iniciar servidor
app.listen(5000);