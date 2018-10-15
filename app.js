const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const logger = require('morgan');
require('./db/mysql');
const port = process.env.PORT || 3000;
const coreRoute = require('./routes/userRoutes');
const router = express.Router();

const app = express();

//TODO: Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));

//TODO: Routes to handle user Requests

router.get('/', coreRoute);
router.post('/register', coreRoute);
router.post('/login', coreRoute);
app.use('/api', router);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});