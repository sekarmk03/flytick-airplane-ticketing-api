require('dotenv').config()
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./routes/index');
const swaggerUi = require('swagger-ui-express');
// const Sentry = require('@sentry/node');
// const Tracing = require('@sentry/tracing');
const swaggerDocument = require('./flytick-docs.json');
const cors = require('cors');

const app = express();

// const {
//     ENVIRONMENT
// } = process.env;

// Sentry.init({
//     dsn: "https://ad029fff7bd84c07b6c26118fe13b45c@o4504078210105344.ingest.sentry.io/4504367213051904",
//     environment: ENVIRONMENT,
//     integrations: [
//         new Sentry.Integrations.Http({ tracing: true }),
//         new Tracing.Integrations.Express({
//             app
//         })
//     ],
//     sampleRate: 1.0
// });

// app.use(Sentry.Handlers.requestHandler());
// app.use(Sentry.Handlers.tracingHandler());

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

// handler
// app.use(Sentry.Handlers.errorHandler());
app.use((req, res, next) => {
    return res.status(404).send("Are u lost?")
});
app.use((err, req, res, next)=>{
        return res.status(500).json({
        status: false,
        message: err.message
    });
});

module.exports = app;
