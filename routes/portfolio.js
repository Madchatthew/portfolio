const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const url = "https://api.github.com/users/Madchatthew/repos";
        const response = await axios.get(url);
        let data = JSON.parse(response.body);
        res.render('portfolio/index', {'data': data}, { layout: './layouts/portfolioLayout' });    
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;