const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('experience/index', { layout: './layouts/experienceLayout' });
});

module.exports = router;