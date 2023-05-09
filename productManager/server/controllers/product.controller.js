const Product = require('../models/product.model');

module.exports = {
    // CREATE PRODUCT
    createProduct: (req, res) => {
        console.log(req.body)
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.status(400).json(err))
    },

    // READ ONE PRODUCT
    getOneProduct: (req,res) => {
        console.log(req)
        Product.findById(req.params.id)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.status(400).res.json(err))
    },

    // READ ALL PRODUCTS
    getAllProducts: (req,res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.status(400).json(err))
    },

    // UPDATE PRODUCT
    updateProduct: (req,res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updateProduct => res.json(updateProduct))
            .catch((err => res.status(400).json(err)))
    },

    // DELETE PRODUCT
    deleteProduct: (req,res) => {
        Product.deleteOne({_id:req.params.id})
        .then(deleteOneProduct => res.json(deleteOneProduct))
        .catch((err) => console.log(err))
    }

}