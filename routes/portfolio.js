const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('portfolio/index', { layout: './layouts/portfolioLayout' });
});

module.exports = router;