const express = require('express');
const smptClient = require('emailjs');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact/index', { layout: './layouts/contactLayout' });
});

router.post('/', (req, res) => {

    // SMTP server setup

    const client = new smptClient({
        user: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSWORD,
        host: process.env.HOST,
        ssl: true
    });
    
    client.send(
        {
            from: `${req.body.email}`,
            to: `chadjessen@chadjessen.com`,
            subject: 'New message from a visitor at chadjessen.com',
            text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
        },
        (err, message) => {
            console.log(err || message);
        }
    );

    // if(req.body.details != "") {
    //     res.render('contact/index', { layout: './layouts/contactLayout' });
    // } else {
    //     res.render('index/index', { layout: './layouts/contactLayout' });
    // }
})

module.exports = router;