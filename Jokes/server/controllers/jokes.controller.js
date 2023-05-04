const Joke = require('../models/jokes.model');

module.exports = {
    // CREATE
    createJoke: (req, res) => {
        Joke.create(req,body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.status(400).json(err))
    },
    // READ
    getAllJokes: (req, res) => {
        Joke.find()
            .then(allJokes =>res.json(allJokes))
            .catch(err => res.status(400).json(err))
    },
    // READ ONE
    getOneJoke: (req, res) => {
        Joke.findById(req.params.id)
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err));
    },
    // UPDATE

    // DELETE
}