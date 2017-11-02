'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'lk7IqejFTEqaIep8guBE16Mg5JWpZtHj';

exports.createToken = function(user) {
  var payload = {
    sub: user._id,
    name: user.name,
    surname:user.surname,
    email:user.email,
    role:user.role,
    image: user.image,
    iat: moment().unix(),
    exp: moment().add(30,'days').unix
  };

  return jwt.encode(payload, secret);
};

exports.parseToken = function(token) {
  return jwt.decode(token, secret);
};
