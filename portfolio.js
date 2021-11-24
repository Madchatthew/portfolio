// Application requirements

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const axios = require('axios').default;
const app = express();

// End application requirements

// App setup section

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

// End App Setup Section

// Routes section

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const itExperienceRouter = require('./routes/itExperience');
const portfolioRouter = require('./routes/portfolio');
const skillsRouter = require('./routes/skills');
const contactRouter = require('./routes/contact');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/itExperience', itExperienceRouter);
app.use('/portfolio', portfolioRouter);
app.use('/skills', skillsRouter);
app.use('/contact', contactRouter);

// End Routes Section

app.listen(process.env.PORT_PORTFOLIO);