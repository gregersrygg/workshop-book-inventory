'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var stockRoutes = require('./stockRoutes.js');

function myLogger(req, res, next) {
    console.log('Incomming request at', new Date());
    next();
};

module.exports = function (bookRepo) {
    app.use(myLogger);
    app.use(bodyParser.json());
    app.use('/stock', stockRoutes(bookRepo));

    app.use(function(req, res, next) {
        var err = new Error('Page not found!');
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        console.error(err.stack);
        res.status(err.status || 500).send('Internal server error');
        res.json({message: err.message, error: (process.env.NODE_ENV == 'production' ? {}: err.stack)});
    });

    return app;
};
