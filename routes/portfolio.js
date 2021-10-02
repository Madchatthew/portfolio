const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const url = "https://api.github.com/users/Madchatthew/repos";
    
    res.render('portfolio/index', { layout: './layouts/portfolioLayout' });
});

module.exports = router;