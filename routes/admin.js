const express = require('express');

const router = express.Router();

const adminAuthController = require('../controllers/adminAuthController');

router.get('/', adminAuthController.create);
router.post('/admin-register', adminAuthController.store);

module.exports = router;