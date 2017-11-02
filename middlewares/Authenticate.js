'use strict'

var jwt = require('../services/jwt');
var moment = require('moment');

exports.Auth = function(request,response,next) {
   if (!request.headers.authorization) {
     return response.status(403).send({message:'Cabecera invalida'});
   }

   var token = request.headers.authorization.replace(/['"]+/g,'');
    try {
      var payload =jwt.parseToken(token);
      if (payload.exp <= moment().unix()) {
        return response.status(401).send({
          message:'El token ha expirado'
        });
      }
    } catch (e) {
      return response.status(404).send({
        message:'El token no es válido'
      });
    }

    request.user = payload;
    next();
};
