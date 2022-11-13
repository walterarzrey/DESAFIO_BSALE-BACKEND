// Imports globales y predefinidos
const express = require('express');

// Import controlador de categoría (para responder a las solicitudes entrantes)
const categoryController = require('../controllers/categoryController');

// Manejador de rutas (Middleware)
const router = express.Router();

// GET -> lista de categorias
router.get('/categories', categoryController.getCategories);

// GET -> Detalle de la categoría (disponible para implementaciones posteriores)
router.get('/categories/:categoryId', categoryController.getCategoryDetail);

// Exportar rutas
module.exports = router;