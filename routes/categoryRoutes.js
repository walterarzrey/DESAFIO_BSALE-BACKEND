const express = require('express');

const categoryController = require('../controllers/categoryController');

// Manejador de rutas (Middleware)
const router = express.Router();

// GET -> lista de categorias
router.get('/categories', categoryController.getCategories);

// GET -> Detalle de la categoría
router.get('/categories/:categoryId', categoryController.getCategoryDetail);

// Exportar rutas
module.exports = router;