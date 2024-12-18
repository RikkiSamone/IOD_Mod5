const express = require('express');
const router = express.Router();
const productController = require('../controllers/fakeStoreController');


router.get('/', productController.productList);

module.exports = router;