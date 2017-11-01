'use strict'

var express = require('express');
var LoginController = require('../controllers/auth/LoginController');

var Route = express.Router();

Route.post('/login', LoginController.login);

module.exports = Route;
