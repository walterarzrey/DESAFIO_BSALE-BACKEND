// Imports globales y predefinidos
const express = require('express');

// Import controlador de productos (para responder a las solicitudes entrantes)
const productController = require('../controllers/productController');

// Manejador de rutas (Middleware)
const router = express.Router();

// GET -> lista de productos
router.get('/products', productController.getProducts);

// GET -> Detalle del producto (disponible para implementaciones posteriores)
router.get('/product/:productId', productController.getProductDetail);

// GET -> Lista de productos por categoría
router.get('/products/:categoryId', productController.getProductsByCategory);

// Exportar rutas
module.exports = router;