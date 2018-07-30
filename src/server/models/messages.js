const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({

    msg: {
        type:String,
        required: 'message can not be blank!'
    },
    client_name: {
        type:String,
        required: 'name can not be empty'
    },
    date: {
        type:Date,
        default:Date.now
    }

});


const msgModel = mongoose.model('Message',msgSchema);
module.exports = msgModel;