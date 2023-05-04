const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/ai/jokes', JokeController.createJoke);
    app.get('/api/jokes/:id', JokeController.getOneJoke);
}