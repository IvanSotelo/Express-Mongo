'use strict'
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/User');

/**
 * Display a listing of the resource.
 *
 * @return Response
 */

function index(request, response) {
  response.status(200).send({message: 'Hola'});
}

/**
 * Store a newly created resource in storage.
 *
 * @return Response
 */

function store(request, response) {
  if (request.body.name && request.body.password && request.body.surname && request.body.email) {
    var user = new User();
    user.name = request.body.name;
    user.surname = request.body.surname;
    user.email = request.body.email;
    user.role = 'ROLE_USER';
    user.image = null;

    User.findOne({email: user.email.toLowerCase()}, (err, issetUser) => {
      if (err) {
        response.status(500).send({message: 'Error al comprobar usuario'});
      }else {
        if (!issetUser) {
          bcrypt.hash(request.body.password, null, null, function(err,hash){
            user.password = hash;
            user.save((err, userStored) => {
              if (err){
                response.status(500).send({message: 'Error al guardar usuario'});
              }else {
                if (!userStored) {
                  response.status(404).send({message: 'Usuario no resgistrado'});
                }else {
                  response.status(200).send({user: userStored});
                }
              }
            });
          });
        }else {
          response.status(200).send({message: 'El usuario ya existe'});
        }
      }
    });
  }else {
    response.status(200).send({message: 'Faltan campos para el registro'});
  }
}

/**
 * Update the specified resource in storage.
 *
 * @param  int  $id
 * @return Response
 */
function update(request,response)
{
  var id = request.params.id;

  User.findByIdAndUpdate(id, request.body , {new:true}, (err,user) => {
    if (err) {
      response.status(500).send({message: 'Error actualizar usuario'});
    }else {
      if (!user) {
        response.status(404).send({message: 'No existe el usuario'});
      }else {
        response.status(200).send({user: user});
      }
    }
  });

}

module.exports = {
  index,
  store,
  update
};
