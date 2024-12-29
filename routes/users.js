// routes/users.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const {
  getProfile,
  updateProfile,
  getAllUsers,
  deleteUser
} = require('../controllers/userController');

router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.get('/', [auth, admin], getAllUsers);
router.delete('/:id', [auth, admin], deleteUser);

module.exports = router;