'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const signup = require('./routes/signup');
const login = require('./routes/login');
const postad = require('./routes/postad');
const posts = require('./routes/posts');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/signup', signup);
app.use('/login', login);
app.use('/postad', postad);
app.use('/posts', posts);

app.use((err, req, res, next) => {
    res.status(401).json({ err: err.message });
});

module.exports = app;
