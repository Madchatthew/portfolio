// Variables setup

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

// App setup section
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(express.static('public'));
app.use(expressLayouts);

// Routes section
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const skillsRouter = require('./routes/skills');
const contactRouter = require('./routes/contact');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/skills', skillsRouter);
app.use('/contact', contactRouter);

app.listen(process.env.PORT);