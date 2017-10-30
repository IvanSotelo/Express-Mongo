'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Angular4',{useMongoClient:true})
.then( () => {
    console.log('Conexión satisfactorio!');
  })
.catch(err => console.log(err));
