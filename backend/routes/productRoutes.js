const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getFeaturedProducts,
  getNewProducts,
  searchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getFilterOptions
} = require('../controllers/productController');

// Public routes
router.get('/', getAllProducts);
router.get('/search', searchProducts);
router.get('/featured', getFeaturedProducts);
router.get('/new', getNewProducts);
router.get('/filters', getFilterOptions);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getProductById);

// Admin routes (you'll need to add authentication middleware)
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;