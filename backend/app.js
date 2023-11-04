const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');

app.use(express.json());

//routes imports
const product = require('./routes/productRoute');


app.use('/api/v1', product);



module.exports = app;