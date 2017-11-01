'use strict'

var express = require('express');
var UserController = require('../controllers/UserController');

var Route = express.Router();

Route.post('/register', UserController.store);

module.exports = Route;
