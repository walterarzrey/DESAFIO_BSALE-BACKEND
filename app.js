// Imports globales y predefinidos
const express = require('express');
const bodyParser = require('body-parser');

// Imports propios
const db = require('./utilities/dbConnection');                     // Import ORM de sequelize para la conexión
const productRoutes = require('./routes/productRoutes');            // Import ruta de productos
const categoryRoutes = require('./routes/categoryRoutes');          // Import ruta de categorias
const errorsController = require('./controllers/errorController');  // Import controlador de errores
const handlers = require('./middleware/handlers');                  // Import middleware para controlar errores

// Inicializa la aplicación con el framework express
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
    app.listen(3000 || 5000, async () => {  // Inicia el puerto del servidor
        try {
            // Se prueba si la conexión es correcta con el ORM de sequelize (Datos de la conexión)
            await db.authenticate()
            console.log('Conexión exitosa.');
        } catch (error) {
            console.log('Acceso denegado:', error);
            // Controla la reconexión a la base de datos
            setTimeout(await db.authenticate(), 5000);
        };
    })
}
connection();   // Se abre la conexión