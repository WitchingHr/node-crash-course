const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// get password from .env file
require('dotenv').config();
const PASS = process.env.PASSWORD;

// express app
const app = express();

// connect to db and listen for requests
const uri = `mongodb+srv://db-user:${PASS}@cluster0.1reujyd.mongodb.net/node-tutorial?retryWrites=true`
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3002);
    console.log('connected to db');
  })
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
// parse url-encoded data (from form)
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// ROUTES:

// index (redirect to blogs)
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// about
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
