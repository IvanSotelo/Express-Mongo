'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Rutas

//Middlewares de bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar cabeceras y cors

//Rutas body-parser


module.exports = app;
