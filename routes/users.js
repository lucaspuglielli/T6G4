const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const sessionVerifier = require('../middleware/sessionVerifier');

/* User register routes */
router.get('/', sessionVerifier, userController.create);
router.post('/', userController.store);

module.exports = router;
