const Category = require('../models/categoryModel');

exports.getCategories = (req, res, next) => {
    Category.findAll()
        .then(category => {
            return res.status(200).json({ message: 'Categorias listadas exitosamente.', categories: category });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

exports.getCategoryDetail = (req, res, next) => {
    const categoryId = req.params.categoryId;
    Category.findByPk(categoryId)
        .then(category => {
            if (!category) {
                const error = new Error('Detalle de la categoría no encontrado.');
                error.statusCode = 404;
                throw error;
            }
            return res.status(200).json({ message: 'Detalle de la categoría encontrado exitosamente.', category: category });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};