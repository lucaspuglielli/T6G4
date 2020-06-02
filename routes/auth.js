const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');
const loginMiddleware = require('../middleware/loginMiddleware');

router.get('/', loginMiddleware, authController.create);
router.post('/', authController.store);

module.exports = router;