const Product = require('../models/productModel');
const { Op } = require("sequelize");

exports.getProducts = (req, res, next) => {
    const product_name = req.query.product_name;
    console.log(product_name);
    if (!product_name) {
        Product.findAll()
            .then(product => {
                return res.status(200).json({ message: 'Productos listados exitosamente.', products: product });
            })
            .catch(error => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    } else {
        Product.findAll({
            where: {
                name: {
                    [Op.substring]: product_name
                }
            }
        })
            .then(product => {
                return res.status(200).json({ message: 'Productos listados exitosamente.', products: product });
            })
            .catch(error => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    }
};

exports.getProductDetail = (req, res, next) => {
    const productId = req.params.productId;
    Product.findByPk(productId)
        .then(product => {
            if (!product) {
                const error = new Error('Detalle del producto no encontrado.');
                error.statusCode = 404;
                throw error;
            }
            return res.status(200).json({ message: 'Detalle de producto encontrado exitosamente.', product: product });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

exports.getProductsByCategory = (req, res, next) => {
    const categoryId = req.params.categoryId;
    Product.findAll({
        where: {
            category: categoryId
        }
    })
        .then(products => {
            if (products.length === 0) {
                const error = new Error('Error al listar productos.');
                error.statusCode = 404;
                throw error;
            }
            return res.status(200).json({ message: 'Productos listados exitosamente.', products: products });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};