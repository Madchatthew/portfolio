require('dotenv').config();

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('This is the index route.');
});

app.listen(process.env.PORT);