const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('skills/index', { layout: './layouts/skillsLayout' });
});

module.exports = router;