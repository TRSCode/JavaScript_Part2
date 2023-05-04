const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    // code here
    setup: {
        type: String,
        required: [true, "Title is required"],
        minlenght: [2, "Title must be at least 2 characters long"],
        maxlength: [255, "Title cannot be more than 255 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Title is required"],
        minlenght: [2, "Title must be at least 2 characters long"],
        maxlength: [255, "Title cannot be more than 255 characters long"]
    }
    // releaseYear: {
    //     type: String,
    //     required: [true, "Title is required"],
    //     min: [1900, "Release year must be at least 1900"],
    // }
}, {timestamps: true});

module.exports = mongoose.model('Joke', JokeSchema);