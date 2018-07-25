var mongoose = require('mongoose'); // object modeling tool in nodejs for MongoDB
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/msgboard_api')

mongoose.Promise = Promise;

module.exports.msgModel = require('./messages');