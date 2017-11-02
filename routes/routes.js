'use strict'

var express = require('express');
var UserController = require('../controllers/UserController');

var Route = express.Router();
var middleware = require('../middlewares/Authenticate');

Route.post('/register', UserController.store);
Route.get('/user',middleware.Auth, UserController.index);
Route.put('/user/:id',middleware.Auth, UserController.update);
module.exports = Route;
