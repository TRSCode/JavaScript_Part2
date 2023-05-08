const ProdcutController = require('../controllers/product.controller');  

module.exports = app => {
    app.post('/api/product', ProdcutController.createProduct);
    app.get('/api/product', ProdcutController.getAllProducts);
    app.get('/api/product/:id', ProdcutController.getOneProduct);
    app.patch('/api/product/:id', ProdcutController.updateProduct);
    app.delete('/api/product/:id',ProdcutController.deleteProduct);
}

