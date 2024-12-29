// backend/middleware/validation.js
const { body, validationResult } = require('express-validator');

exports.validateRegistration = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateProduct = [
  body('name').trim().notEmpty().withMessage('Product name is required'),
  body('price')
    .isNumeric()
    .withMessage('Price must be a number'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];