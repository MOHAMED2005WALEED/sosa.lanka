// routes/orders.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createOrder,
  getOrders,
  updateOrderStatus
} = require('../controllers/orderController');

router.post('/', auth, createOrder);
router.get('/', auth, getOrders);
router.put('/:id/status', auth, updateOrderStatus);

module.exports = router;