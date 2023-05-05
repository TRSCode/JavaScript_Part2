const Joke = require('../models/jokes.model');

module.exports = {
    // CREATE
    createJoke: (req, res) => {
        console.log(req.body)
        Joke.create(req.body)
            .then(newJoke => res.json(newJoke))
            .catch(err => res.status(400).json(err))
    },
    // READ
    getAllJokes: (req, res) => {
        // console.log(req)
        Joke.find()
            .then(allJokes =>res.json(allJokes))
            .catch(err => res.status(400).json(err))
    },
    // READ ONE
    getOneJoke: (req, res) => {
        // console.log(req)
        Joke.findById(req.params.id)
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err));
    },
    // READ RANDOM 
    getRandomJoke: (req,res) => {
        Joke.aggregate([{ $sample: { size: 1 } }])
            .then(randomJoke => res.json(randomJoke[0]))
            .catch(err => res.status(400).json(err));
    },
    // getRandomJoke: (req, res) => {
    //     Joke.find(_id)
    //         .then(allJokes => 
    //         {
    //             const randomIndex = Math.floor(Math.random() * allJokes.length)
    //             const randomJoke = allJokes[randomIndex];
    //             console.log(randomJoke, randomIndex)
    //             return res.json(randomJoke)
    //         })
    //         .catch(err => res.status(400).json(err))
    // },

    
    // getRandomJoke: (req, res) => {
    //     Joke.countDocuments().exec((err, count) => {
    //         if (err) {
    //             return res.status(400).json(err);
    //         }
    //         const randomIndex = Math.floor(Math.random() * count);
    //         Joke.findOne().skip(randomIndex).exec((err, randomJoke) => {
    //             if (err) {
    //                 return res.status(400).json(err);
    //             }
    //             return res.json(randomJoke);
    //         });
    //     });
    // },

    // UPDATE
    updateJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
            .then(updatedJoke => res.json(updatedJoke))
            .catch(err => res.json(err));
    },
    // DELETE
    deleteJoke: (req, res) => {
        Joke.deleteOne(req.params._id )
            .then(deleteOneJoke => res.json(deleteOneJoke))
            .catch((err) => console.log(err));
    }
}