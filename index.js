const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./routes/index');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./flytick-docs.json');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// app.use('/flytick-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/flytick-api/images', express.static('public/images'));
app.use('/flytick-api', router);

module.exports = app;
