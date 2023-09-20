require('dotenv').config()
const express = require('express');
const appRouter = require('./routes/appRouter');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(express.json());
app.use(express.static(`${__dirname}/../public`))

app.use('/api/v1', appRouter);

module.exports = app;
