const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact/index', { layout: './layouts/contactLayout' });
});

router.post('/', (req, res) => {

    // SMTP server setup

    let smtpTrans = nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
    })

    // Specify what the email will look like

    const mailOpts = {
        from: `${req.body.email}`,
        to: `chadjessen@chadjessen.com`,
        subject: 'New message from a visitor at chadjessen.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    // Attempt to send the email

    if(req.body.details != "") {
        res.render('contact/index', { layout: './layouts/contactLayout' });
    } else {
        smtpTrans.send(mailOpts, (err, res) => {
            if (err) {
                res.render('contact/index', { layout: './layouts/contactLayout' }); // Show a page indicating failure
            } else {
                res.render('contact/index', { layout: './layouts/contactLayout' }); // Show a page indicating success
            }
        })
    }
    
})

module.exports = router;