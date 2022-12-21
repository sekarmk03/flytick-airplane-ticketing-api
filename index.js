require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./flytick-docs.json');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.set('view engine', 'ejs')
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/images', express.static('public/images'));
// ERROR HANDLING HERE
app.use('/api', router);

app.use((req, res, next) => {
    return res.status(404).json({
        status: false,
        message: 'resource not found',
        data: null
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({
        status: false,
        message: err.message,
        data: null
    });
});

module.exports = app;
