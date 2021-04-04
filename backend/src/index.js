const dotenv = require('dotenv');
const { request, response } = require('express');
const express = require('express');
const routes = require('./routes');

const result = dotenv.config();
if (result.error) {
    throw result.error
    console.log(result.parsed);
}


const app = express();
// app.listen(3333);
app.use(express.json());
app.use(routes);



app.listen(3333);