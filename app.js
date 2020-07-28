const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/*
 * Routes
 */

const indexRoutes = require('./routes/index');
app.use('/api/index', indexRoutes);



app.use(express.static('public'))

module.exports = app;
