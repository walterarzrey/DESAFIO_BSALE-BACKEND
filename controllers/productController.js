const Product = require('../models/productModel');
const { Op } = require("sequelize");    // Operadores de sequelize para consultas

// Variable que almacena cuantos productos se verán por página
const ITEMS_PER_PAGE = 8;

// 
exports.getProducts = (req, res, next) => {
    const page = +req.query.page || 1;
    const ordername = req.query.ordername || 'id';
    const direction = req.query.direction || 'ASC';
    let totalProducts;
    const product_name = req.query.product_name;    // Request que tiene almacenado el dato de la busqueda en la URL
    if (!product_name) {
        // Lista todos los productos si no existen datos en la busqueda
        Product.findAndCountAll({
            offset: (page - 1) * ITEMS_PER_PAGE,
            limit: ITEMS_PER_PAGE,
            order: [
                [ordername, direction]
            ]
        })
            .then(product => {
                totalProducts = product.count;
                const prods = product.rows.map((res) => {
                    return res.dataValues;
                })
                return res.status(200).json({ message: 'Productos listados exitosamente.', products: prods, totalProducts, ITEMS_PER_PAGE, ordername, direction });
            })
            .catch(error => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    } else {
        Product.findAndCountAll({
            offset: (page - 1) * ITEMS_PER_PAGE,
            limit: ITEMS_PER_PAGE,
            where: {
                name: {
                    [Op.substring]: product_name    // substring = %[texto]%
                }
            },
            order: [
                [ordername, direction]
            ]
        })
            .then(product => {
                totalProducts = product.count;
                const prods = product.rows.map((res) => {
                    return res.dataValues;
                })
                return res.status(200).json({ message: 'Productos listados exitosamente.', products: prods, totalProducts, ITEMS_PER_PAGE, ordername, direction });
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
    const page = +req.query.page || 1;
    const ordername = req.query.ordername || 'id';
    const direction = req.query.direction || 'ASC';
    const categoryId = req.params.categoryId;
    let totalProducts;
    Product.findAndCountAll({
        offset: (page - 1) * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
        where: {
            category: categoryId
        },
        order: [
            [ordername, direction]
        ]
    })
        .then(products => {
            totalProducts = products.count;
            const prods = products.rows.map((res) => {
                return res.dataValues;
            })
            if (products.length === 0) {
                const error = new Error('Error al listar productos.');
                error.statusCode = 404;
                throw error;
            }
            return res.status(200).json({ message: 'Productos listados exitosamente.', products: prods, totalProducts, ITEMS_PER_PAGE, ordername, direction });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};