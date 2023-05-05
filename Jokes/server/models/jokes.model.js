const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    // code here
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlenght: [2, "Setup must be at least 2 characters long"],
        maxlength: [255, "Setup cannot be more than 255 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlenght: [2, "Punchline must be at least 2 characters long"],
        maxlength: [255, "punchline cannot be more than 255 characters long"]
        }
    // releaseYear: {
    //     type: String,
    //     required: [true, "Title is required"],
    //     min: [1900, "Release year must be at least 1900"],
    // }
}, {timestamps: true});

module.exports = mongoose.model('Joke', JokeSchema);