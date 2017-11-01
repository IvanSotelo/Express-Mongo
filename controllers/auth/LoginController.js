'use strict'
var bcrypt = require('bcrypt-nodejs');
var User = require('../../models/User');

/*
|--------------------------------------------------------------------------
| Login Controller
|--------------------------------------------------------------------------
|
| This controller handles authenticating users for the application and
| redirecting them to your home screen. The controller uses a trait
| to conveniently provide its functionality to your applications.
|
*/

function login(request,response) {
  var email = request.body.email;
  var password = request.body.password;
  User.findOne({email: email.toLowerCase()}, (err, user) => {
    if (err) {
      response.status(500).send({message: 'Error al comprobar usuario'});
    }else {
      if (user) {
        bcrypt.compare(password, user.password, (err,check) => {
          if (check) {
            response.status(200).send({user});
          }else {
            response.status(401).send({message: 'Usuario no autorizado'});
          }
        });
      }else {
        response.status(404).send({message: 'El usuario no existe'});
      }
    }
  });
}

module.exports = {
  login
};
