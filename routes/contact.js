const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact/index', { layout: './layouts/contactLayout' });
});

router.post('/', (req, res) => {

    // SMTP server setup

    const smtpTrans = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.SMTPPORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    // Specify what the email will look linkedin

    const mailOpts = {
        from: `${req.body.email}`,
        to: `chadjessen@chadjessen.com`,
        subject: 'New message from a visitor at chadjessen.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    // Attempt to send the email

    smtpTrans.send(mailOpts, (err, res) => {
        if (err) {
            res.send('contact/index'); // Show a page indicating failure
        } else {
            res.render('contact/index'); // Show a page indicating success
        }
    })
})

module.exports = router;