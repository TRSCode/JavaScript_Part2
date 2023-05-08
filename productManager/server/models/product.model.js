const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"],
        maxlength: [45, "Title cannot be more than 45 characters long"]
    },
    price: {
        type: String,
        required: [true, "Price is required"],
        minlength: [2, "Price must be at least 2 characters long"],
        maxlength: [45, "Price cannot be more than 45 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"],
        maxlength: [255, "Description cannot be more than 255 characters long"]
    }

}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);