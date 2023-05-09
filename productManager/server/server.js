const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors());

const AllMyProductRoutes = require('./routes/product.route');
AllMyProductRoutes(app);




app.listen(8000, () => {console.log("Listening at Port 8000")})