require('dotenv').config();

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const index = require('../index')

app.use(express.static('public'));

app.listen(process.env.PORT);