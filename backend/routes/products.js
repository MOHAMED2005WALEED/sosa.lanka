// routes/products.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.post('/', [auth, admin], createProduct);
router.put('/:id', [auth, admin], updateProduct);
router.delete('/:id', [auth, admin], deleteProduct);

module.exports = router;