const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const router = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', router);

module.exports = app;
