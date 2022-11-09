// Imports globales y predefinidos
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const db = require('./utilities/dbConnection');

// Para acceder a la información del body habilitado para JSON
app.use(bodyParser.json());

// Iniciar servidor
app.listen(5000);