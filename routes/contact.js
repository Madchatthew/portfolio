const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact/index', { layout: './layouts/contactLayout' });
});

router.post('/', async (req, res) => {

    let emailName = req.body.form.name;
    let emailAddress = req.body.form.email;
    let emailMessage = req.body.form.message;

    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.SMTPPORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    
    let email = await transporter.sendMail({
        from: emailAddress,
        to: `chadjessen@chadjessen.com`,
        subject: 'New message from a visitor at chadjessen.com',
        text: `${ emailName } with email address ${ emailAddress } says: ${ emailMessage }`
    })

    if(req.body.details != "") {
        res.render('contact/index', { layout: './layouts/contactLayout' });
    } else {
        transporter.sendMail(email, (error, info) => {
            if (error) {
                res.send('error occured');
            } else {
                res.render('index/index', { layout: './layouts/indexLayout' });
            }
        })
    }
})

module.exports = router;