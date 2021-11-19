const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('itExperience/index', { layout: './layouts/itExperienceLayout' });
});

module.exports = router;