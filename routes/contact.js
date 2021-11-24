const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact/index', { layout: './layouts/contactLayout' });
});

router.post('/', (req, res) => {

    // SMTP server setup

    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        name: process.env.SERVER_NAME,
        secure: true,
        port: process.env.SMTPPORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            password: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    // Specify what the email will look like

    let mailOpts = {
        from: `${req.body.email}`,
        to: `chadjessen@chadjessen.com`,
        subject: 'New message from a visitor at chadjessen.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    // Attempt to send the email

    if(req.body.details != "") {
        res.render('contact/index', { layout: './layouts/contactLayout' });
    } else {
        transporter.send(mailOpts, (err, res) => {
            if (err) {
                alert('This did not send');
                // res.render('contact/index', { layout: './layouts/contactLayout' }); // Show a page indicating failure
            } else {
                res.render('contact/index', { layout: './layouts/contactLayout' }); // Show a page indicating success
            }
        })
    }
    
})

module.exports = router;