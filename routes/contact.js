const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact/index', { layout: './layouts/contactLayout' });
});

router.post('/', async (req, res) => {

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
        from: `${req.body.email}`,
        to: `chadjessen@chadjessen.com`,
        subject: 'New message from a visitor at chadjessen.com',
        text: `req.body.name with email address req.body.email says: req.body.message`
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