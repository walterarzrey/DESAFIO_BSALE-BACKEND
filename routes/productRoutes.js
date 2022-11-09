const express = require('express');

const productController = require('../controllers/productController');

// Manejador de rutas (Middleware)
const router = express.Router();

// GET -> lista de productos
router.get('/products', productController.getProducts);

// GET -> Detalle del producto
router.get('/product/:productId', productController.getProductDetail);

// GET -> Lista de productos por categoría
router.get('/products/:categoryId', productController.getProductsByCategory);

// Exportar rutas
module.exports = router;