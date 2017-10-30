'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Angular4',{useMongoClient:true})
.then( () => {
    console.log('Conexión satisfactorio!');
    app.listen(port, () => {
      console.log("El servidor local node y express se inicio correctamente");
    });
  })
.catch(err => console.log(err));
