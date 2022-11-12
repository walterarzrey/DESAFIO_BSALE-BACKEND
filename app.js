// Imports globales y predefinidos
const express = require('express');
const bodyParser = require('body-parser');

// Import propios
const db = require('./utilities/dbConnection');                     // Import datos de conexión a la db
const productRoutes = require('./routes/productRoutes');            // Import controlador de productos
const categoryRoutes = require('./routes/categoryRoutes');          // Import controlador de categorias
const errorsController = require('./controllers/errorController');  // Import controlador de errores
const handlers = require('./middleware/handlers');                  // Import middleware para controlar errores

const app = express();

// Para acceder a la información del body habilitado para JSON
app.use(bodyParser.json());

// Middleware para permitir CORS
app.use(handlers.setHeaders);

// Rutas
app.use(productRoutes);
app.use(categoryRoutes);

// Ruta para devolver error 404
app.use(errorsController.get404);

// Middleware para controlar errores en general
app.use(handlers.errorHandler);

// Iniciar servidor
const connection = async () => {
    app.listen(process.env.PORT || 5000, async () => {
        try {
            // Se emplea ORM sequelize para evitar ataques de SQLInjection, ya que transforma la data en objetos
            await db.authenticate()
            console.log('Conexión exitosa.');
        } catch (error) {
            console.log('Acceso denegado:', error);
            // Controla la reconexión a la base de datos
            setTimeout(await db.authenticate(), 5000);
        };
    })
}
connection();