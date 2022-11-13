  // Import modelo Categoría
const Category = require('../models/categoryModel');

// Lista todas las categorías
exports.getCategories = (req, res, next) => {
    Category.findAll()
        .then(category => {
            // Respuesta a la solicitud con las categorías
            return res.status(200).json({ message: 'Categorias listadas exitosamente.', categories: category });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

// Lista el detalle por categoría (No se utiliza, pero está disponible para futuras implementaciones)
exports.getCategoryDetail = (req, res, next) => {
    const categoryId = req.params.categoryId;   // ID de la categoría obtenido de los parámetros de la solicitud
    Category.findByPk(categoryId)
        .then(category => {
            // Verifica si el array contiene datos (controla el envío de solicitud con ids de categoría inexistentes)
            if (!category) {
                const error = new Error('Detalle de la categoría no encontrado.');
                error.statusCode = 404;
                throw error;
            }
            // Respuesta a la solicitud con los detalles de la categoría
            return res.status(200).json({ message: 'Detalle de la categoría encontrado exitosamente.', category: category });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};