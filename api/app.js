var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var peopleRouter = require('./routes/people');

var HOST_NAME = 'db';
var DATABASE_NAME = 'start-wars-database';

mongoose.connect('mongodb://' + HOST_NAME + '/' + DATABASE_NAME);

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/people', peopleRouter);

module.exports = app;
