const express = require('express');
const productController = require('../controllers/productController');
const clientController = require('../controllers/clientController')

//define a router and create routes
const router = express.Router();

//routes for dynamic processing of products
//-----------------------------------------------   
//route for listing all products
router.get('/api/catalog', productController.getCatalog);
router.get('/api/article/:id', productController.getProductByID);

//routes for dynamic processing of clients
//-----------------------------------------------
//route for register
router.post('/api/register', clientController.registerControl);
//route for login
router.post('/api/login', clientController.loginControl);
router.get('/api/clientDetails', clientController.getClient);

//export router
module.exports = router;