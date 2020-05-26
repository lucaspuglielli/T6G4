const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

router.get('/', authController.create);
router.post('/', authController.store);

module.exports = router;