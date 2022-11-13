const Product = require('../models/productModel');  // Import modelo Producto
const { Op } = require("sequelize");    // Import Operadores de sequelize para consultas

// Variable que almacena cuantos productos se verán por página
const ITEMS_PER_PAGE = 8;

// Lista todos productos
exports.getProducts = (req, res, next) => {
    const page = +req.query.page || 1;              // Página solicitada por URL (Para paginación)
    const ordername = req.query.ordername || 'id';  // Dato por el cual se ordenarán los productos
    const direction = req.query.direction || 'ASC'; // Dirección (Ascendente o Descendente) para ordenar productos
    let totalProducts;
    const product_name = req.query.product_name;    // Data para obtener productos filtrados por nombre

    // Verifica si se debe filtrar los productos por nombre
    if (!product_name) {
        // Lista todos los productos si no existen datos en la busqueda
        Product.findAndCountAll({
            offset: (page - 1) * ITEMS_PER_PAGE,    // Cursor de ubicación para paginación
            limit: ITEMS_PER_PAGE,                  // Limitar cantidad de elementos encontrados
            order: [
                [ordername, direction]              // Datos para ordenar el listado
            ]
        })
            .then(product => {
                totalProducts = product.count;      // Cantidad de productos en total
                // Crea un nuevo array con datos (rows) de la función (FindAndCountAll)
                const prods = product.rows.map((res) => {
                    return res.dataValues;
                })
                // Respuesta a la solicitud con los productos y demás datos para paginación y ordenamiento
                return res.status(200).json({ message: 'Productos listados exitosamente.', products: prods, totalProducts, ITEMS_PER_PAGE, page, ordername, direction, product_name });
            })
            .catch(error => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    } else {
        // Lista todos los productos filtrados por el nombre
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
                // Respuesta a la solicitud con los productos y demás datos para paginación y ordenamiento
                return res.status(200).json({ message: 'Productos listados exitosamente.', products: prods, totalProducts, ITEMS_PER_PAGE, page, ordername, direction, product_name });
            })
            .catch(error => {
                if (!error.statusCode) {
                    error.statusCode = 500;
                }
                next(error);
            });
    }
};

// Lista los detalles de un solo producto por el ID (No se utiliza, pero está disponible para futuras implementaciones)
exports.getProductDetail = (req, res, next) => {
    const productId = req.params.productId;   // ID del producto obtenido de los parámetros de la solicitud
    // Busca producto por el ID
    Product.findByPk(productId)
        .then(product => {
            if (!product) {
                const error = new Error('Detalle del producto no encontrado.');
                error.statusCode = 404;
                throw error;
            }
            // Respuesta a la solicitud con los detalles del producto
            return res.status(200).json({ message: 'Detalle de producto encontrado exitosamente.', product: product });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

// Lista todos los productos por categoría
exports.getProductsByCategory = (req, res, next) => {
    const page = +req.query.page || 1;              // Página solicitada por URL (Para paginación)
    const ordername = req.query.ordername || 'id';  // Dato por el cual se ordenarán los productos
    const direction = req.query.direction || 'ASC'; // Dirección (Ascendente o Descendente) para ordenar productos
    const categoryId = req.params.categoryId;       // ID de la categoría obtenido de los parámetros de la solicitud
    let totalProducts;
    // Busca todos los productos
    Product.findAndCountAll({
        offset: (page - 1) * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
        where: {
            category: categoryId    // Condición para búsqueda por id de categoría
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
            // Verifica si el array contiene datos (controla el envío de solicitud con ids de categoría inexistentes)
            if (products.length === 0) {
                const error = new Error('Error al listar productos.');
                error.statusCode = 404;
                throw error;
            }
            // Respuesta a la solicitud con los detalles del producto y demás datos para paginación y ordenamiento
            return res.status(200).json({ message: 'Productos listados exitosamente.', products: prods, totalProducts, ITEMS_PER_PAGE, page, ordername, direction, categoryId });
        })
        .catch(error => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};