'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Rutas
var routes = require('./routes/routes');
var auth = require('./routes/auth');
//Middlewares de bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar cabeceras y cors
app.use('/api',routes);
app.use('/auth',auth);
//Rutas body-parser


module.exports = app;
