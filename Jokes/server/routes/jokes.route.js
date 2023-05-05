const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes/:id', JokeController.getOneJoke);
    // changes all values to match req.body
    // app.put('/api/jokes/:id', JokeController,JokeController.updateJoke) 
    // this will only change the values changed
    app.patch('/api/jokes/:id', JokeController.updateJoke);
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
    app.get('/api/jokes/random', JokeController.getRandomJoke);
}