const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
    const url = 'https://api.github.com/users/Madchatthew/repos';
    axios({
        method: 'GET',
        url: url,
        headers: { 
            "Content-Type": 'application/json',            
            "Accept": 'application/vnd.github.mercy-preview+json'
        }
    }).then(response => {
            let results = response.data;
            res.render('portfolio/index', { layout: './layouts/portfolioLayout', results });
        }).catch(error => {
            res.send(error);
        });
});

module.exports = router;