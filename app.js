// Imports globales y predefinidos
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import propios
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const errorsController = require('./controllers/errorController');  // Import controlador de errores
const handlers = require('./middleware/handlers');                  // Import middleware para controlar errores

const app = express();

const db = require('./utilities/dbConnection');

// Para acceder a la información del body habilitado para JSON
app.use(bodyParser.json());

// Middleware para permitir CORS
app.use(handlers.setHeaders);
app.use(cors());

// Rutas
app.use(productRoutes);
app.use(categoryRoutes);

// Ruta para devolver error 404
app.use(errorsController.get404);

// Middleware para controlar errores en general
app.use(handlers.errorHandler);

// Iniciar servidor
db.authenticate()
    .then(() => {
        app.listen(5000);
        console.log('Conexión exitosa.');
    })
    .catch(error => {
        setTimeout(() => {
            app.listen(5000);
        }, 5000);
        console.log('Conexión rechazada', error);
    })