 const express = require('express');
 const index = express.Router();

index.get('/', (req, res) => {
    res.send('This is the index route.');
});

module.exports = index;